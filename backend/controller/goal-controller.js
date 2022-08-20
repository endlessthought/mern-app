const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Goles', method: 'GET' })
})
const saveGoal = asyncHandler(async (req, res) => {

  if (!req.body.goal) {
    res.status(400)
    // .json({ message: "Please provide Goal." })
    throw new Error("Please provide Goal.")
  }

  res.status(200).json({ message: 'Save Goles', method: 'POST' })
})
const updateGoal = asyncHandler(async (req, res) => {
  const params = req.params;
  res.status(200).json({ message: 'Update Goles', method: 'PUT', params })
})
const deleteGoal = asyncHandler(async (req, res) => {
  const params = req.params;
  res.status(200).json({ message: 'Delete Goles', method: 'DELETE', params })
})
module.exports = {
  getGoals,
  saveGoal,
  updateGoal,
  deleteGoal
}