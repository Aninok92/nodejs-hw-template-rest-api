const { NotFound } = require('http-errors')
const { User } = require('../../models')
const { sendSuccessResponse } = require('../../helpers')

const subscription = async (req, res) => {
  const { _id } = req.user
  const { subscription } = req.body
  const result = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  )

  if (!result) {
    throw new NotFound('missing field subscription')
  }
  sendSuccessResponse(res, { data: result })
}

module.exports = subscription
