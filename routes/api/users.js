const express = require('express')

const {
  joiSchemaUser,
  updateSubscriptionJoiSchema,
} = require('../../models/user')
const {
  controllerWrapper,
  validation,
  authenticate,
} = require('../../middlewars')
const ctrl = require('../../controllers/user')

const router = express.Router()

router.post(
  '/signup',
  validation(joiSchemaUser),
  controllerWrapper(ctrl.signup)
)

router.post('/login', validation(joiSchemaUser), controllerWrapper(ctrl.login))

router.get('/logout', authenticate, controllerWrapper(ctrl.logout))

router.get('/current', authenticate, controllerWrapper(ctrl.current))

router.patch(
  '/',
  authenticate,
  validation(updateSubscriptionJoiSchema),
  controllerWrapper(ctrl.subscription)
)

module.exports = router
