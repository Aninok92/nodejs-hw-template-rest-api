const { NotFound } = require('http-errors')
const { Contact } = require('../../models')
const { sendSuccessResponse } = require('../../helpers')

const contactById = async (req, res) => {
  const { id } = req.params
  // const { _id } = req.user
  const result = await Contact.findOne(
    {
      _id: id,
    },
    '_id name email phone favorite'
  )
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  sendSuccessResponse(res, { data: result })
}

module.exports = contactById
