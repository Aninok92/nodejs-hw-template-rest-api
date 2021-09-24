const { NotFound } = require('http-errors')
const contactsOperations = require('../../model/contacts')
const { sendSuccessResponse } = require('../../helpers')

const updateContact = async (req, res) => {
  const { id } = req.params
  const result = await contactsOperations.updateContact(id, req.body)
  if (!result) {
    throw new NotFound('missing fields')
  }
  sendSuccessResponse(res, { data: result })
}

module.exports = updateContact
