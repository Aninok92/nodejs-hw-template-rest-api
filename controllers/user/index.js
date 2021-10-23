const login = require('./login')
const logout = require('./logout')
const signup = require('./signup')
const current = require('./currentUser')
const subscription = require('./subscription')
const avatar = require('./avatar')
const verify = require('./verify')

module.exports = {
  login,
  logout,
  signup,
  current,
  subscription,
  avatar,
  verify,
}
