import User from "./auth.model.js";
import ApiError from "../../common/utils/api-error.js";
import {
  generateAccessToken,
  generateRefreshToken,
  generateResetToken,
  hashToken,
} from "../../common/utils/jwt.utils.js";

const register = async ({ name, email, password, role }) => {
  const existing = await User.findOne({
    email,
  });
  if (existing) throw ApiError.conflict("Email already exists");

  const { rawToken, hashedToken } = generateResetToken();

  const user = await User.create({
    name,
    email,
    password,
    role,
    verificationToken: hashedToken,
  });

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.verificationToken;

  return userObj;
};

const login = async ({ email, password }) => {
  const user = await User.findOne({
    email,
  }).select("+password");

  if (!user) throw ApiError.unauthorized("Invalid Email or Password");
  if (!user.isVerified)
    throw ApiError.forbidden("Please verify your email before log in");

  const accessToken = generateAccessToken({
    id: user._id,
    role: user.role,
  });
  const refreshToken = generateRefreshToken({
    id: user._id,
  });

  user.refreshToken = hashToken(refreshToken);
  await user.save({
    validateBeforeSave: false,
  });

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.refreshToken;

  return {
    user: userObj,
    accessToken,
    refreshToken,
  };
};

const refresh = async (token) => {
  if (!token) throw ApiError.unauthorized("Refresh token missing");
  const decoded = verifyRefreshToken(token);

  const user = await User.findById(decoded.id).select("+refreshToken");
  if (!user) throw ApiError.unauthorized("User not found");

  if (user.refreshToken !== hashToken(token)) {
    throw ApiError.unauthorized("Invalid refresh token");
  }

  const accessToken = generateAccessToken({
    id: user._id,
    role: user.role,
  });

  return {
    accessToken,
  };
};

const logout = async (userId) => {
  //   const user = await User.findById(userId);
  //   if (!user) throw ApiError.unauthorized("User not found");

  //   user.refreshToken = undefined;
  //   await user.save({ validateBeforeSave: false });

  await User.findByIdAndUpdate(userId, {
    refreshToken: null,
  });
};

export default register;
