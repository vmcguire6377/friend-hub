const { user } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
      user.find({})
        .then(dbUserData=> res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    // get one user by id
    getUserById({ params }, res) {
      user.findOne({ _id: params.id })
        .then(dbUserData => {
          // If no user is found, send 404
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    // create user
    createUser({ body }, res) {
        user.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },

    // update user by id
    updateUser({ params, body }, res) {
        user.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete user
    deleteUser({ params}, res) {
       user.findOneAndDelete({ _id: params.id })
       .then(dbUserData => { 
       if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
},

addFriend({ params, body }, res) {
  user.findOneAndUpdate(
    { _id: params.userId },
    { $push: { friend: body } },
    { new: true }
  )
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err));
},
// remove friend
removeFriend({ params }, res) {
  user.findOneAndUpdate(
    { _id: params.userId },
    { $pull: { friend: { friendId: params.friendId } } },
    { new: true }
  )
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.json(err));
}
};

module.exports = userController;