const { generateToken } = require("../config/jwtToken");
const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");

const CreateUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const userExists = await User.findOne({ email });
  if (!userExists) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User already exists");
  }
});

const loginUserController = asyncHandler(async (req, res) => {
 const { email, password } = req.body;
 const findUser = await User.findOne({ email });
 if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({
        id : findUser?.id,
        firstname : findUser?.firstname,
        lastname : findUser?.lastname,
        mobile : findUser?.mobile,
        email : findUser?.email,
        token : generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});   
module.exports = { CreateUser, loginUserController };
