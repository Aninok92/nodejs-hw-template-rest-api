const express = require('express')
const {
  joiSchema,
  updateFavoriteContactJoiSchema,
} = require('../../models/contact')
const {
  controllerWrapper,
  validation,
  authenticate,
} = require('../../middlewars')
const ctrl = require('../../controllers/contacts')

const router = express.Router()

router.get('/', authenticate, controllerWrapper(ctrl.listContacts))

router.get('/:id', authenticate, controllerWrapper(ctrl.contactById))

router.post(
  '/',
  authenticate,
  validation(joiSchema),
  controllerWrapper(ctrl.addContact)
)

router.put(
  '/:id',
  authenticate,
  validation(joiSchema),
  controllerWrapper(ctrl.updateContact)
)

router.patch(
  '/:id/favorite',
  authenticate,
  validation(updateFavoriteContactJoiSchema),
  controllerWrapper(ctrl.updateStatusContact)
)

router.delete('/:id', authenticate, controllerWrapper(ctrl.removeContact))

module.exports = router
