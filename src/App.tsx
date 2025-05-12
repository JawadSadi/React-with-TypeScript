import React, { useState } from "react";
import User from "./components/User";
import Button from "./components/Button";
import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";
import type { adminInfo, userInfo } from "./types";

// export default function App() {
//   return (
//     <div>
//       <User name={"Jawad"} age={22} isStudent={true}>
//         <h1>Hello Please Introduce Yourself : </h1>
//       </User>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <Button
//         label={"Click"}
//         onClick={() => console.log("button clicked")}
//         disabled={false}
//       />
//     </div>
//   );
// }

export default function App() {
  const user: userInfo = {
    id: 1,
    name: "Jawad",
    lastName: "Sadiq",
    gmail: "Jawadsadiq7373@gamil.com",
  };
  const admin: adminInfo = {
    id: 2,
    name: "Jamil",
    lastName: "Sadiq",
    gmail: "Jamil3333@gamil.com",
    role: "Admin",
    lastLogin: new Date(),
  };
  return (
    <div>
      <AdminInfo admin={admin} />
      <UserInfo user={user} />
    </div>
  );
}
