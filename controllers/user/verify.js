const { User } = require('../../models')
const { NotFound } = require('http-errors')
const { sendSuccessResponse } = require('../../helpers')

const verify = async (req, res) => {
  const { verifyToken } = req.params
  const user = await User.findOne({ verifyToken })
  if (!user) {
    throw new NotFound('Verify error')
  }

  await User.findByIdAndUpdate(user._id, { verifyToken: null, verify: true })
  sendSuccessResponse(res, { data: user })
}

module.exports = verify
