const express = require("express");
const {
  createSchedule,
  getSchedules,
  getSchedule,
  updateSchedule,
  deleteSchedule,
} = require("../controllers/scheduleController");
const userRequireAuth = require("../middleware/userRequireAuth");
const validation = require("../middleware/validationMiddleware");
const { scheduleValidation } = require("../validations/scheduleValidation");


// express router
const router = express();
router.use(userRequireAuth)

router.post(
  "/",
  // userRequireAuth,
  validation(scheduleValidation),
  createSchedule
);
router.get(
  "/",
  // userRequireAuth,
  getSchedules
);
router.get(
  "/:id",
  // userRequireAuth,
  validation(scheduleValidation),
  getSchedule
);
router.put(
  "/:id",
  // userRequireAuth,
  validation(scheduleValidation),
  updateSchedule
);
router.delete(
  "/:id",
  // userRequireAuth,
  validation(scheduleValidation),
  deleteSchedule
);

module.exports = router;
