const { Router } = require('express')
const { registerUser, loginUser, getUsers, updateUser} = require('../controllers/userController')

const router = Router();

router.post("/register", registerUser).post("/login", loginUser)

router.route('/').get(getUsers)

router.patch("/:id", updateUser)

module.exports = router
