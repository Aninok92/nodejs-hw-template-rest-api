const { nanoid } = require('nanoid')
const fs = require('fs/promises')
const path = require('path')
const listContacts = require('./listContacts')

const filePath = path.join(__dirname, 'db/contacts.json')

const addContact = async (data) => {
  const contacts = await listContacts()
  const newContact = {
    id: nanoid(),
    ...data,
  }
  contacts.push(newContact)
  await fs.writeFile(filePath, JSON.stringify(contacts))
  return newContact
}

module.exports = addContact
