const fs = require('fs/promises')
const path = require('path')
const listContacts = require('./listContacts')

const filePath = path.join(__dirname, '../../db/contacts.json')

const removeContact = async (id) => {
  const contacts = await listContacts()

  const idx = contacts.findIndex(
    (contact) => contact.id.toString() === id.toString()
  )
  if (idx === -1) {
    return null
  }

  contacts.splice(idx, 1)
  await fs.writeFile(filePath, JSON.stringify(contacts))
  return contacts
}

module.exports = removeContact
