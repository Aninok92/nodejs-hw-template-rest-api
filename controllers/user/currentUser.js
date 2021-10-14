const { User } = require('../../models')
const { sendSuccessResponse } = require('../../helpers')

const current = async (req, res) => {
  const { _id } = req.user
  const result = await User.findById(_id, 'email subscription')
  sendSuccessResponse(res, { data: result })
}

module.exports = current
