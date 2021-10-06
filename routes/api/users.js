const express = require('express')

const { joiSchemaUser } = require('../../models/user')
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

module.exports = router
