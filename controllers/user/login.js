const { Unauthorized } = require('http-errors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { sendSuccessResponse } = require('../../helpers')

const { User } = require('../../models')

const { SECRET_KEY } = process.env

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email }, '_id email password')
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new Unauthorized('Email or password is wrong')
  }
  const { _id } = user
  const payload = {
    _id,
  }
  const token = jwt.sign(payload, SECRET_KEY)
  await User.findByIdAndUpdate(_id, { token })
  console.log(user)
  sendSuccessResponse(res, { token })
}

module.exports = login
