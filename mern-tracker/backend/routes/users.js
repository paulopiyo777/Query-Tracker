const router = require('express').Router();
let User = require('../models/user.model');

// first route: handles incoming http get requests
router.route('/').get((req, res) => {
    User.find() // returns a list of all members in the MongoDB Atlas database
      .then(users => res.json(users)) // returns users in json format
      .catch(err => res.status(400).json('Error: ' + err)); // returns error
});

// second route: handles incoming http post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;