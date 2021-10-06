const { Contact } = require('../../models')
const { sendSuccessResponse } = require('../../helpers')

const listContacts = async (req, res) => {
  const { _id } = req.user
  const result = await Contact.find(
    { owner: _id },
    '_id name email phone favorite'
  )
  sendSuccessResponse(res, { data: result })
}

module.exports = listContacts
