import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  scientificName: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
    required: [true, "URL image is required"],
  },
  information: {
    type: String,
    required: [true, "information is required"],
  },
  plantCare: {
    watering: {
      type: String,
      required: [true, "watering information is required"],
    },
    light: {
      type: String,
      required: [true, "light information is required"],
    },
    temperature: {
      type: String,
      required: [true, "favorite temperature is required"],
    },
    fertilization: {
      type: String,
      required: [true, "fertilizing information is required"],
    },
  },
  funFacts: {
    type: String,
  },
  randomQuotes: {
    type: String,
  },
});

export default mongoose.model("Plants", userSchema);
