import { useState, useRef } from "react";
import { Button, Select, MenuItem, Box, CircularProgress } from "@mui/material";
import Cropper from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Tesseract from "tesseract.js";

const IngredientOCRWithCrop = ({ setProductIngredients }) => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState(null);
  const [language, setLanguage] = useState("eng");
  const [loading, setLoading] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setProductIngredients("");
      setShowTools(true);
    }
  };

  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  // Turn image into grayscale
  const preprocessImage = (image) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = image;

    return new Promise((resolve) => {
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = data[i + 1] = data[i + 2] = avg;
        }
        ctx.putImageData(imageData, 0, 0);

        resolve(canvas.toDataURL());
      };
    });
  };

  const extractText = async () => {
    if (!image) return;
    setLoading(true);
    let croppedImage;

    if (crop) {
      const canvas = document.createElement("canvas");
      const img = document.createElement("img");
      img.src = image;

      await new Promise((resolve) => {
        img.onload = () => {
          const scaleX = img.naturalWidth / img.width;
          const scaleY = img.naturalHeight / img.height;

          canvas.width = crop.width * scaleX;
          canvas.height = crop.height * scaleY;
          const ctx = canvas.getContext("2d");

          ctx.drawImage(
            img,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            canvas.width,
            canvas.height
          );

          croppedImage = canvas.toDataURL("image/png");
          resolve();
        };
      });
    } else {
      croppedImage = image;
    }

    const preprocessedImage = await preprocessImage(croppedImage);

    Tesseract.recognize(preprocessedImage, language, {
      tessedit_char_whitelist:
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.",
      logger: (info) => console.log(info),
    })
      .then(({ data: { text } }) => {
        setProductIngredients(text);
      })
      .catch((err) => {
        console.error(err);
        setProductIngredients("Error extracting text.");
      })
      .finally(() => {
        setShowTools(false);
        setLoading(false);
        resetFileInput();
      });
  };

  return (
    <Box>
      <Button variant="outlined" component="label">
        Scan a Label
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageUpload}
          ref={fileInputRef}
        />
      </Button>

      {loading && (
        <Box sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}

      {showTools && image && !loading && (
        <Box sx={{ marginTop: 2 }}>
          <Cropper crop={crop} onChange={(newCrop) => setCrop(newCrop)}>
            <img src={image} alt="Uploaded label" />
          </Cropper>
          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            sx={{ marginBottom: 2, width: 200 }}
          >
            <MenuItem value="eng">English</MenuItem>
            <MenuItem value="fin">Finnish</MenuItem>
          </Select>
          <Button variant="contained" onClick={extractText}>
            Extract Ingredients
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default IngredientOCRWithCrop;
