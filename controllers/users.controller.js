const User = require('../models/UserModel');

const CreateUser = async (req, res) => {

const email = req.body.email;

const userExists = await User.findOne({ email });
if (!userExists) {
    const newUser = await User.create(req.body);
    res.json(newUser);
}
else {
res.json({
    message: 'User already exists',
    success: false,
});

}
}

module.exports = { CreateUser };