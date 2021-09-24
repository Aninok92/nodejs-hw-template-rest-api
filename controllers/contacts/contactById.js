const { NotFound } = require('http-errors')
const contactsOperations = require('../../model/contacts')
const { sendSuccessResponse } = require('../../helpers')

const contactById = async (req, res) => {
  const { id } = req.params
  const result = await contactsOperations.contactById(id)
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  sendSuccessResponse(res, { data: result })
}

module.exports = contactById
