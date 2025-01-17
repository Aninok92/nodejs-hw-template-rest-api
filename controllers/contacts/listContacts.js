const { Contact } = require('../../models')
const { sendSuccessResponse } = require('../../helpers')

const listContacts = async (req, res) => {
  const { page = 1, limit = 20, favorite } = req.query
  const skip = (page - 1) * limit
  const { _id } = req.user

  const result = await Contact.find(
    favorite
      ? ({ owner: _id },
        '_id name email phone favorite',
        { skip, limit: +limit, favorite })
      : ({ owner: _id },
        '_id name email phone favorite',
        { skip, limit: +limit })
  )
  sendSuccessResponse(res, { data: result })
}

module.exports = listContacts
