const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
{
     day: {
        type: Date,
        default: () => new Date()
     },
    exercises: [
        {
            type: {
                type: String,
                unique: true,
                required: "Please choose an exercise type",
                trim: true

            },
            name:{ 
                type: String,
                unique: true,
                required: "Please enter an exercise name",
                trim: true
            },
            duration:{
                type: Number,
                required: "Please enter the duration of the exercise",
                trim: true
            },
            weight:{
                type: Number,
                trim: true
            },
            reps:{ 
                type: Number,
                trim: true
            },
            sets:{
                type: Number,
                trim: true
            },
            distance:{
                type: Number,
                trim: true
            }
        },
        { toJSON: { virtuals: true }
        }
    ]
}
);

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;