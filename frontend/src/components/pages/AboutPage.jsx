import { Box, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Box>
      <Typography variant="h2" sx={{ marginTop: '25px' }}>About Allergen Tracker</Typography>
      <p>
        Allergen Tracker is a project developed as part of the course Design of WWW Sevices (CS-E4400) at 
        Aalto University.<br/>
        Its purpose is to help users track allergens in cosmetic products and identify 
        ingredients that may cause allergic reactions.
      </p>
      <Typography variant="h3">Contact Information</Typography>
      <p>For inquiries, please feel free to reach out to any of the following contacts:</p>
      <ul>
        <li><a href="mailto:milja.rantanen@aalto.fi" style={{ color: 'black' }}>milja.rantanen@aalto.fi</a></li>
        <li><a href="mailto:kia.kajava@aalto.fi" style={{ color: 'black' }}>kia.kajava@aalto.fi</a></li>
        <li><a href="mailto:joonas.e.sorvari@aalto.fi" style={{ color: 'black' }}>joonas.e.sorvari@aalto.fi</a></li>
      </ul>
    </Box>
  );
};

export default AboutPage;
