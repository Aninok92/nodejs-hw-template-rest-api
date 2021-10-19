const path = require('path')
const fs = require('fs/promises')
const { User } = require('../../models')
const { sendSuccessResponse } = require('../../helpers')

const avatarDir = path.join(__dirname, '../../', 'public/avatars')

const avatar = async (req, res) => {
  const { path: tempStorage, originalname } = req.file
  const { _id } = req.user
  const fileName = path.join(avatarDir, originalname)
  try {
    await fs.rename(tempStorage, fileName)
    const avatarURL = path.join('/avatars', originalname)

    await User.findByIdAndUpdate(_id, { avatarURL }, { new: true })

    sendSuccessResponse(res, { avatarURL })
  } catch (err) {
    await fs.unlink(tempStorage)
  }
}

module.exports = avatar
