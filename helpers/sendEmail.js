const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const { SENGRID_KEY } = process.env

sgMail.setApiKey(SENGRID_KEY)

const sendEmail = async (data) => {
  const email = { ...data, from: 'aninok92@gmail.com' }
  await sgMail.send(email)
}

module.exports = sendEmail
