const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    rollNo: {
        type: String,
        required: true
    },

    score: {
        type: Number,
        required: true
    }
  });

const Marks = mongoose.model('Marks', marksSchema);

module.exports = Marks;