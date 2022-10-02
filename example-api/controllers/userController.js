const User  = require("../models/userSchema");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");

//register a user
//@route POST api/v1/users/register
//@desc register a user
//@access Public
exports.registerUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const { name, email, password, location, phone, interest, profile } = req.body;
  
      const hashpassword = await bcrypt.hash(password, 10);
  
      const user = await User.create({
        name,
        email,
        password: hashpassword,
        location,
        phone,
        interest,
        profile,
      });
      // console.log(user);
      res.status(201).json({
        success: true,
        data: {
          user,
          token: generateToken(user._id),
        },
      });
    } else {
      res.status(400).json({
        success: false,
        error: "User already exists",
      });
    }
  };
  
  //login a user
  // @route POST api/v1/users/login
  // @desc login a user
  // @access Public
  exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
      
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        error: "Invalid credentials",
      });
    }
  
    res.status(200).json({
      success: true,
      data: {
        user,
        token: generateToken(user._id),
      },
    });
  };

  //getting a user
  exports.getUsers = async(req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}

  //update a user
  // @route PATCH /api/v1/users/:id
  // @desc Update a user
  // @access Public
  exports.updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user)
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    res.status(200).json({
      success: true,
      data: user,
    });
  };
  