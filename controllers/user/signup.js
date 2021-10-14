const { Conflict } = require('http-errors')
const bcrypt = require('bcryptjs')
const { sendSuccessResponse } = require('../../helpers')

const { User } = require('../../models')

const signup = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  const newUser = { email, password: hashPassword }
  await User.create(newUser)
  sendSuccessResponse(res, { message: 'Success register' }, 201)
}

module.exports = signup
