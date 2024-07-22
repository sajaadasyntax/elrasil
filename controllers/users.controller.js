const User = require('../models/UserModel');
const asyncHandler = require('express-async-handler');
const CreateUser =  asyncHandler( async (req, res) => {

const email = req.body.email;

const userExists = await User.findOne({ email });
if (!userExists) {
    const newUser = await User.create(req.body);
    res.json(newUser);
}
else {
throw new Error("User already exists");

}
});


module.exports = { CreateUser };