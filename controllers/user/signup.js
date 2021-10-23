const { Conflict } = require('http-errors')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const { nanoid } = require('nanoid')
const { sendSuccessResponse, sendEmail } = require('../../helpers')

const { User } = require('../../models')

const signup = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }
  const url = gravatar.url(email)
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  const verifyToken = nanoid()
  const newUser = {
    email,
    password: hashPassword,
    avatarURL: url,
    verifyToken,
  }
  await User.create(newUser)
  const data = {
    to: email,
    subject: 'Подтверждение регестрации на сайте',
    html: `
            <a href="http://localhost:3000/api/users/verify/${verifyToken}" target="_blank">Подтвердить почту</a>
            `,
  }
  await sendEmail(data)

  sendSuccessResponse(res, { message: 'Success register' }, 201)
}

module.exports = signup
