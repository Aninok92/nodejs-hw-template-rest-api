const { sendSuccessResponse } = require('../../helpers')
const { User } = require('../../models')

const logout = async (req, res) => {
  const { _id } = req.user
  await User.findByIdAndUpdate(_id, { token: null })
  sendSuccessResponse(res, { message: 'No Content' }, 204)
}

module.exports = logout
