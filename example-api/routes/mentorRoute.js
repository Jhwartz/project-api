const { Router } = require("express");
//const { protect } =require('../middlewares/auth.middleware')
const {
  addMentor,
  //getAllMentors,
  //getMentor,
  //updateMentor,
  //getTopRatedMentors,
  //createMentorReview,
} = require("../controllers/mentorController");

const router = Router();

//router.post("/addschool", createSchool)
router.post("/addMentor", addMentor)

//router.route("/").post(protect, addMentor).get(getAllMentors);
//router.get("/top", getTopRatedMentors);
//router.route("/:id").get(getMentor).patch(protect, updateMentor);
//router.route("/:id/reviews").post(protect, createMentorReview);

module.exports = router;
