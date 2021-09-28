const { NotFound } = require('http-errors')
const { Contact } = require('../../models')
const { sendSuccessResponse } = require('../../helpers')

const removeContact = async (req, res) => {
  const { id } = req.params
  const result = await Contact.findOneAndDelete(id)
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  sendSuccessResponse(res, { message: 'contact deleted' })
}

module.exports = removeContact
