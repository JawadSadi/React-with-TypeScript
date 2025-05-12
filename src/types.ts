type userInfo = {
  id: number;
  name: string;
  lastName: string;
  gmail: string;
};

type adminInfo = userInfo & {
  role: string;
  lastLogin: Date;
};

export { type userInfo, type adminInfo };
