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
// const userRequireAuth = require("../middleware/userRequireAuth");

// express router
const router = express();

router.post(
  "/createSchedule",
  // userRequireAuth,
  validation(scheduleValidation),
  createSchedule
);
router.get(
  "/getSchedules",
  // userRequireAuth,
  getSchedules
);
router.get(
  "/getSchedule/:id",
  // userRequireAuth,
  validation(scheduleValidation),
  getSchedule
);
router.put(
  "/updateSchedule/:id",
  // userRequireAuth,
  validation(scheduleValidation),
  updateSchedule
);
router.delete(
  "/deleteSchedule/:id",
  // userRequireAuth,
  validation(scheduleValidation),
  deleteSchedule
);

module.exports = router;
