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
  mobileNumber: string;
  role: UserRoles;
};

export type UserModel = Model<IUser, Record<string, unknown>>;

export type IUserFilters = {
  searchTerm?: string;
  id?: string;
  'name.firstName'?: string;
  'name.lastName'?: string;
  mobileNumber?: string;
  email?: string;
};
