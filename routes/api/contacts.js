const express = require('express')
const { contactSchema } = require('../../schemas')
const { controllerWrapper, validation } = require('../../middlewars')
const { contacts: ctrl } = require('../../controllers')

const router = express.Router()

router.get('/', controllerWrapper(ctrl.listContacts))

router.get('/:id', controllerWrapper(ctrl.contactById))

router.post('/', validation(contactSchema), controllerWrapper(ctrl.addContact))

router.put(
  '/:id',
  validation(contactSchema),
  controllerWrapper(ctrl.updateContact)
)

router.delete('/:id', controllerWrapper(ctrl.removeContact))

module.exports = router
