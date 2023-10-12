export const isUserExist = async function (email: string, UserDb: any) {
  return await UserDb.findOne(
    { email },
    { _id: 1, password: 1, role: 1 }
  ).lean();
};
