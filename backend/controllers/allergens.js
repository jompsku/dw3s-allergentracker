const allergenRouter = require("express").Router();
const { getPossibleAllergens } = require("../services/allergenService");

allergenRouter.get("/", async (request, response) => {
  try {
    const possibleAllergens = await getPossibleAllergens(request.user);
    // For the demo, in real application ingredients will have their own ids also
    const res = possibleAllergens.map((item, index) => ({
      _id: index,
      name: item,
    }));
    response.status(200).json(res);
  } catch (err) {
    console.log(err);
    response.status(500).json({ message: "error while finding allergens" });
  }
});

module.exports = allergenRouter;
