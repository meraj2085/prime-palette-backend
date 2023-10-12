import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../utils/jwtHelper';
import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { isPasswordMatch } from '../../../utils/isPasswordMatch';
import { isUserExist } from '../../../utils/isUserExists';
import {
  ILoginResponse,
  IRefreshTokenResponse,
} from '../../../interfaces/common';

const signUp = async (userData: IUser) => {
  const newUSer = await User.create(userData);
  if (!newUSer) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User creation failed');
  }
  const { _id: userId, role } = newUSer;
  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

const login = async (payload: IUser): Promise<ILoginResponse> => {
  const { email, password } = payload;
  const user = await isUserExist(email, User);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  // Check if password is correct
  const passwordMatch = await isPasswordMatch(password, user.password);
  if (!passwordMatch) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  //create access token & refresh token
  const { _id: userId, role } = user;
  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (err) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token');
  }

  const { userId } = verifiedToken;

  const isUserExists = await User.findById(
    { _id: userId },
    { _id: 1, role: 1 }
  ).lean();

  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  // Generate a new token
  const newAccessToken = jwtHelpers.createToken(
    {
      userId: isUserExists._id,
      role: isUserExists.role,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthService = {
  signUp,
  login,
  refreshToken,
};
