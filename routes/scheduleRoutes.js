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
router.use(userRequireAuth);

router.post("/", validation(scheduleValidation), createSchedule);
router.get("/", getSchedules);
router.get("/:id", getSchedule);
router.put("/:id", validation(scheduleValidation), updateSchedule);
router.delete("/:id", deleteSchedule);

module.exports = router;



