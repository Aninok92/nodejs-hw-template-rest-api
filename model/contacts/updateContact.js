const fs = require('fs/promises')
const path = require('path')
const listContacts = require('./listContacts')

const filePath = path.join(__dirname, 'db/contacts.json')

const updateContact = async (id, data) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex((item) => item.id.toString() === id.toString())
  if (idx === -1) {
    return null
  }
  const updateContact = { ...contacts[idx], ...data }
  contacts.push(updateContact)
  await fs.writeFile(filePath, JSON.stringify(contacts))
  return updateContact
}

module.exports = updateContact
