const express = require("express");
const {
  createSchedule,
  getSchedules,
  getSchedule,
  updateSchedule,
  deleteSchedule,
} = require("../controllers/scheduleController");
const validation = require("../middleware/validationMiddleware");
const { scheduleValidation } = require("../validations/scheduleValidation");

// express router
const router = express();

router.post("/createSchedule", validation(scheduleValidation), createSchedule);
router.get("/getSchedules", getSchedules);
router.get("/getSchedule/:id", validation(scheduleValidation), getSchedule);
router.put(
  "/updateSchedule/:id",
  validation(scheduleValidation),
  updateSchedule
);
router.delete(
  "/deleteSchedule/:id",
  validation(scheduleValidation),
  deleteSchedule
);

module.exports = router;
