const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};

// const router = require("express").Router();
// const Workout = require("../models/workout.js");

// router.post("/api/workouts", (req, res) => {
//   Workout.create({})
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// router.put("/api/workouts/:id", ({ body, params }, res) => {
//   Workout.findByIdAndUpdate(
//     params.id,
//     { $push: { exercises: body } },
//     // "runValidators" will ensure new exercises meet our schema requirements
//     { new: true, runValidators: true }
//   )
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// router.get("/api/workouts", (req, res) => {
//   Workout.find()
//     .then(dbWorkouts => {
//       res.json(dbWorkouts);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// router.get("/api/workouts/range", (req, res) => {
//   Workout.find({}).limit(7)
//     .then(dbWorkouts => {
//       console.log(dbWorkouts)
//       res.json(dbWorkouts);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// router.delete("/api/workouts", ({ body }, res) => {
//   Workout.findByIdAndDelete(body.id)
//     .then(() => {
//       res.json(true);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// module.exports = router;