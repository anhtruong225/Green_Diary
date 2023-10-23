import Plants from "../models/Plants.js";

export const getAllPlants = async (req, res, next) => {
  try {
    const plants = await Plants.find();

    if (!plants.length) {
      throw { statusCode: 404, message: "Plants not found" };
    }
    res.json(plants);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the plant." });

    next(error);
  }
};

export const getPlantById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plant = await Plants.findById(id);

    if (!plant) {
      return res.status(404).json({ message: "Plant not found" });
    }

    res.json(plant);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the plant." });
    next(error);
  }
};
