const { NotFound } = require('http-errors')
const { Contact } = require('../../models')
const { sendSuccessResponse } = require('../../helpers')

const updateStatusContact = async (req, res) => {
  const { id } = req.params
  const { favorite } = req.body
  const result = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    { new: true }
  )
  if (!result) {
    throw new NotFound('missing field favorite')
  }
  sendSuccessResponse(res, { data: result })
}

module.exports = updateStatusContact
