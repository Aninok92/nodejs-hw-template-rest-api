const { Schema, model } = require('mongoose')
const Joi = require('joi')

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
)

const joiSchemaUser = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
})

const updateSubscriptionJoiSchema = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business'),
})

const User = model('user', userSchema)

module.exports = {
  joiSchemaUser,
  updateSubscriptionJoiSchema,
  User,
}
