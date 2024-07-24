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

const getAllUsers = asyncHandler(async (req, res) => {
    try{
      const getUsers = await User.find();
      res.json(getUsers);  

     } catch(error){ {
       throw new Error(error);
     }
   
}});

const getUser = asyncHandler(async (req, res) => {
   const {id} = req.params;
  try{
   const getuser = await User.findById(id);
   res.json(getuser);    
  } catch(error){
    throw new Error(error);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
    const {id} = req.params;
   try{
    const deleteuser = await User.findByIdAndDelete(id);
    res.json(deleteuser);    
   } catch(error){
     throw new Error(error);
   }
 });

 const updateaUser = asyncHandler(async (req, res) => {
    const {id} = req.params;
   try{
    const updateduser = await User.findByIdAndUpdate(id,
        {
            firstname : req?.body?.firstname,
            lastname : req?.body?.lastname,
            mobile : req?.body?.mobile,
            email : req?.body?.email,
        },
      {
        new: true,
      });
    
    res.json(updateduser);    
   } catch(error){
     throw new Error(error);
   }
 });
module.exports = { CreateUser, loginUserController, getAllUsers , getUser ,deleteUser, updateaUser};
