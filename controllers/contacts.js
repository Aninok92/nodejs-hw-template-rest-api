const { NotFound } = require('http-errors')
const { sendSuccessResponse } = require('../helpers')
const contactsOperations = require('../model/contacts')

const listContacts = async (req, res) => {
  const result = await contactsOperations.contactsList()
  sendSuccessResponse(res, { data: result })
}

const contactById = async (req, res) => {
  const { id } = req.params
  const result = await contactsOperations.contactById(id)
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  sendSuccessResponse(res, { data: result })
}

const addContact = async (req, res) => {
  const result = await contactsOperations.addContact(req.body)
  sendSuccessResponse(res, { data: result }, 201)
}

const updateContact = async (req, res) => {
  const { id } = req.params
  const result = await contactsOperations.updateContact(id, req.body)
  if (!result) {
    throw new NotFound('missing fields')
  }
  sendSuccessResponse(res, { data: result })
}

const removeContact = async (req, res) => {
  const { id } = req.params
  const result = await contactsOperations.removeContact(id)
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  sendSuccessResponse(res, { message: 'contact deleted' })
}

module.exports = {
  listContacts,
  contactById,
  addContact,
  updateContact,
  removeContact,
}
