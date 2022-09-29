const router = require("express").Router();
const { protect } = require("../middlewares/auth.middleware");

const {
  addMentor,
  getAllMentors,
  getMentor,
  updateMentor,
  getTopRatedMentors,
  createMentorReview,
} = require("../controllers/mentors.controller");


router.route("/").post(protect, addMentor).get(getAllMentors);
router.get("/top", getTopRatedMentors);
router.route("/:id").get(getMentor).patch(protect, updateMentor);
router.route("/:id/reviews").post(protect, createMentorReview);

exports.mentorsRouter = router;
