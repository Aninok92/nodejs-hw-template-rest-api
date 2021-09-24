const { NotFound } = require('http-errors')
const contactsOperations = require('../../model/contacts')
const { sendSuccessResponse } = require('../../helpers')

const removeContact = async (req, res) => {
  const { id } = req.params
  const result = await contactsOperations.removeContact(id)
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  sendSuccessResponse(res, { message: 'contact deleted' })
}

module.exports = removeContact
