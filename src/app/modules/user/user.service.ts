import bcrypt from "bcrypt";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import config from "../../../config";

const getUsers = async (): Promise<IUser[] | null> => {
  const users = await User.find();
  return users;
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const users = await User.findById(id);
  return users;
};

const updateUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const newUSer = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return newUSer;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

const getMyProfile = async (id: string): Promise<Partial<IUser> | null> => {
  const user = await User.findById(id).select({
    name: 1,
    email: 1,
  });

  return user;
};

const updateMyProfile = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  if (payload.password) {
    const hashedPassword = await bcrypt.hash(
      payload.password,
      Number(config.bcrypt_salt_rounds)
    );
    payload.password = hashedPassword;
  }
  const newUSer = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  }).select({
    name: 1,
    email: 1,
  });
  return newUSer;
};

export const UserService = {
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  getMyProfile,
  updateMyProfile,
};
