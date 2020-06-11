const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    weight: {
        type: Number,
        trim: true,
        required: true
    },
    sets: {
        type: Number,
        trim: true,
        required: true
    },
    reps: {
        type: Number,
        trim: true,
        required: true
    }, 
    resistanceDuration : {
        type: String,
        trim: true,
        required: true

    }
});

const CardioSchema = new Schema({
    cardioName: {
        type: String,
        unique: true,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    }
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);
const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = (Resistance,Cardio);