import type { userInfo } from "../types";

type userType = {
  user: userInfo;
};

const UserInfo: React.FC<userType> = ({ user }) => {
  return (
    <div>
      <h1>User Information : </h1>
      <h2>ID : {user.id}</h2>
      <h2>Name : {user.name}</h2>
      <h2>Last Name : {user.lastName}</h2>
      <h2>Gmail : {user.gmail}</h2>
    </div>
  );
};

export default UserInfo;
