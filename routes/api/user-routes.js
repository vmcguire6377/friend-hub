const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');
// set up GET all and POST at /api/user
router
.route('/')
.get(getAllUser)
.post(createUser);

// set up GET one, PUT, and DELETE at /api/user/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router.delete;
