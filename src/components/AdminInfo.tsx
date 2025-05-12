import type { adminInfo } from "../types";

type adminType = {
  admin: adminInfo;
};

const AdminInfo: React.FC<adminType> = ({ admin }) => {
  return (
    <div>
      <h1>Admin information : </h1>
      <h2>ID : {admin.id}</h2>
      <h2>Name : {admin.name}</h2>
      <h2>Last Name : {admin.lastName}</h2>
      <h2>Gmail : {admin.gmail}</h2>
      <h2>Role : {admin.role}</h2>
      <h2>Last Login : {admin.lastLogin.toLocaleString()}</h2>
    </div>
  );
};

export default AdminInfo;
