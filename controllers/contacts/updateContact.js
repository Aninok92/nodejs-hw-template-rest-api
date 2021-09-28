const { NotFound } = require('http-errors')
const { Contact } = require('../../models')
const { sendSuccessResponse } = require('../../helpers')

const updateContact = async (req, res) => {
  const { id } = req.params
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true })
  if (!result) {
    throw new NotFound('missing fields')
  }
  sendSuccessResponse(res, { data: result })
}

module.exports = updateContact
