const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
// import * as userController from ;

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.put('/users/:user_id', userController.updateUser);
router.delete('/users/:user_id', userController.deleteUser);

module.exports = router;
