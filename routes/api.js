//get, put, post route
const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workout", (req,res) => {
   Workout.find()
   //.sort({ date: -1 })
   .then(dbWorkout => {
       res.json(dbWorkout);
   })
   .catch(err => {
       res.status(400).json(err);
   })
});

//module.exports
module.exports = router;