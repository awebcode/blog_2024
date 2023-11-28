import { uploadPicture } from "../middleware/uploadPictureMiddleware.js";
import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import PostCategories from "../models/PostCategories.js";
import User from "../models/User.js";
import { fileRemover } from "../utils/fileRemover.js";
import { v2 as cloudinary } from "cloudinary";
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // check whether the user exists or not
    let user = await User.findOne({ email });

    if (user) {
      throw new Error("User have already registered");
    }

    // creating a new user
    user = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      verified: user.verified,
      admin: user.admin,
      token: await user.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      throw new Error("Email not found");
    }

    if (await user.comparePassword(password)) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
        token: await user.generateJWT(),
      });
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    next(error);
  }
};

const userProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);

    if (user) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
      });
    } else {
      let error = new Error("User not found");
      error.statusCode = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};
//single user

const getUserById = async (req, res, next) => {
  const userId = req.params.id; // Assuming the user ID is passed as a route parameter

  try {
    let user = await User.findById(userId);

    if (user) {
      return res.status(200).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
        postCreatedAt: user.postCreatedAt,
      });
    } else {
      let error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }
  } catch (error) {
    return next(error);
  }
};

//update user by admin


const updateUserProfile = async (req, res, next) => {
  const { name, email, verified, admin } = req.body;

  try {
    let user = await User.findById(req.params.id);

    if (user) {
      // Update user properties if provided in the request body
      if (name) {
        user.name = name;
      }
      if (email) {
        user.email = email;
      }
      if (verified !== undefined) {
        user.verified = verified;
      }
      if (admin !== undefined) {
        user.admin = admin;
      }
     

      // Save the updated user
      await user.save();

      return res.status(200).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        admin: user.admin,
        
      });
    } else {
      let error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }
  } catch (error) {
    return next(error);
  }
};

//delete user


//single user

const deleteUser = async (req, res, next) => {
  const userId = req.params.id; // Assuming the user ID is passed as a route parameter

  try {
     let user = await User.findById(userId);
      await user.deleteOne()
   
      return res.status(204).json({
       message:"User Deleted success!"
      });
    
  } catch (error) {
    return next(error);
  }
};
const getUsers = async (req, res, next) => {
  try {
    const filter = req.query.searchKeyword;
    let where = {};
    if (filter) {
      where = {
        $or: [
          { name: { $regex: filter, $options: "i" } },
          { email: { $regex: filter, $options: "i" } },
        ],
      };
    }

    let query = User.find(where);
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    const total = await User.find(where).countDocuments();
    const pages = Math.ceil(total / pageSize);
    
    res.header({
      "x-filter": filter,
      "x-totalcount": JSON.stringify(total),
      "x-currentpage": JSON.stringify(page),
      "x-pagesize": JSON.stringify(pageSize),
      "x-totalpagecount": JSON.stringify(pages),
    });

    if (page > pages) {
      return res.json([]);
    }

    const result = await query
      .skip(skip)
      .limit(pageSize)
     
      .sort({ createdAt: "-1" });

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);

    if (!user) {
      throw new Error("User not found");
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password && req.body.password.length < 6) {
      throw new Error("Password length must be at least 6 character");
    } else if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUserProfile = await user.save();

    res.json({
      _id: updatedUserProfile._id,
      avatar: updatedUserProfile.avatar,
      name: updatedUserProfile.name,
      email: updatedUserProfile.email,
      verified: updatedUserProfile.verified,
      admin: updatedUserProfile.admin,
      token: await updatedUserProfile.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

const updateProfilePicture = async (req, res, next) => {
  try {

          console.log(req.body)
         const user=await User.findById(req.user._id)
    
        if (req.files.profilePicture) {
         const url = await cloudinary.uploader.upload(req.files.profilePicture.data, {
           folder: "avatars",
           width: 150,
           crop: "scale",
         });
          console.log(url)
          user.avatar = url?.url;
          await user.save();
          res.json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
            token: await updatedUser.generateJWT(),
          });
        } else {
          let filename;
          let updatedUser = await User.findById(req.user._id);
          filename = updatedUser.avatar;
          updatedUser.avatar = "";
          await updatedUser.save();
          fileRemover(filename);
          res.json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.name,
            email: updatedUser.email,
            verified: updatedUser.verified,
            admin: updatedUser.admin,
            token: await updatedUser.generateJWT(),
          });
        }
      
    
  } catch (error) {
    next(error);
  }
};
//dashboard datas

const dashboardDatas = async (req, res, next) => {
  try {
    let users = await User.find().countDocuments();
    let blogs = await Post.find().countDocuments();
    let categories = await PostCategories.find().countDocuments();
    let comments = await Comment.find().countDocuments();
    return res.status(200).json({
      users,
      blogs,
      comments,
      categories,
    });
  } catch (error) {
    next(error);
  }
};

export {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  updateProfilePicture,
  getUsers,
  dashboardDatas,
  updateUserProfile,
  getUserById,
  deleteUser
};
