const express = require('express')
const {
  joiSchema,
  updateFavoriteContactJoiSchema,
} = require('../../models/contact')
const { controllerWrapper, validation } = require('../../middlewars')
const ctrl = require('../../controllers/contacts')

const router = express.Router()

router.get('/', controllerWrapper(ctrl.listContacts))

router.get('/:id', controllerWrapper(ctrl.contactById))

router.post('/', validation(joiSchema), controllerWrapper(ctrl.addContact))

router.put('/:id', validation(joiSchema), controllerWrapper(ctrl.updateContact))

router.patch(
  '/:id/favorite',
  validation(updateFavoriteContactJoiSchema),
  controllerWrapper(ctrl.updateStatusContact)
)

router.delete('/:id', controllerWrapper(ctrl.removeContact))

module.exports = router
