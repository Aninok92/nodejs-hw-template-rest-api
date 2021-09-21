const listContacts = require('./listContacts')

const contactById = async (id) => {
  const contacts = await listContacts()
  const contact = contacts.find((item) => item.id.toString() === id.toString())
  if (!contact) {
    return null
  }
  return contact
}

module.exports = contactById
