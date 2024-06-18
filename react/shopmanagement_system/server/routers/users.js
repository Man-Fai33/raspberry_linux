const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.get('/', (req, res) => {

    User.findOne().exec().then(result => {
        res.json({ status: "success", users: result })
    }).catch(err => {
        res.json({ status: "fail", message: err })
    })
})

// Create a new user specified by a User object
router.post('/', async (req, res) => {
    console.log(req.body)
    let target = req.body.user
    // check if the email is duplicated
    let email = target.email
    let error = false
    let resp = {}
    let user = null
    try {

        // find a user with a duplicated email
        user = await User.findOne({ email: email }).exec()
        if (user != null) {
            resp.message = "Email already existed"
            error = true
        }
    }
    catch (err) {
        // if the user cannot be found, do nothing
    }

    if (error) {
        resp.status = "fail"
        res.json(resp)
        return
    }

    // After checking the username is not duplicated


    // generate a userid for the user
    user = new User(target)
    try {
        resp.user = await user.save()
    }
    catch (err) {
        error = true
        resp.message = "User cannot be added"
        resp.err = err
        console.log(err);
    }

    if (error) {
        resp.status = "fail"
        res.json(resp)
        return
    }

    resp.status = "success"
    res.json(resp)
})
module.exports = router;