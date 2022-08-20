const express = require('express');
const router = express.Router();
const goalController = require('../controller/goal-controller');

const {
  getGoals,
  updateGoal,
  deleteGoal,
  saveGoal } = goalController;

router.route('/').get(getGoals).post(saveGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router;