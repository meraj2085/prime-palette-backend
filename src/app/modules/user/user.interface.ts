/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

type UserName = {
  firstName: string;
  lastName: string;
};

export enum UserRoles {
  USER = 'user',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin',
}

export type IUser = {
  name: UserName;
  email: string;
  password: string;
  role: UserRoles;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
