import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
  name: String,
  scientificName: String,
  url: String,
  information: String,
  plantCare: {
    watering: String,
    light: String,
    temperature: String,
    fertilization: String,
  },
  funFact: String,
  randomQuotes: String,
});

export default mongoose.model("Plants", plantSchema);
