const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    author: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    quantity: {
      type: Number,
      required: true
    },

    available: {
      type: Number,
      required: true
    },

    description: {
      type: String,
      default: ""
    },

    image: {
      type: String,
      default:
        "https://via.placeholder.com/150"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Book", bookSchema);