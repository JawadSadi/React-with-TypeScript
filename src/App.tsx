import React, { useState } from "react";
import User from "./components/User";
import Button from "./components/Button";
import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";
import type { adminInfo, userInfo } from "./types";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import FocusInput from "./components/FocusInput";
import ContactForm from "./components/ContactForm";
import EventHandling from "./components/EventHandling";
import UseReducer from "./components/UseReducer";
import { UseEffect } from "./UseEffect";

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

// export default function App() {
//   const user: userInfo = {
//     id: 1,
//     name: "Jawad",
//     lastName: "Sadiq",
//     gmail: "Jawadsadiq7373@gamil.com",
//   };
//   const admin: adminInfo = {
//     id: 2,
//     name: "Jamil",
//     lastName: "Sadiq",
//     gmail: "Jamil3333@gamil.com",
//     role: "Admin",
//     lastLogin: new Date(),
//   };
//   return (
//     <div>
//       <AdminInfo admin={admin} />
//       <UserInfo user={user} />
//     </div>
//   );
// }

// ***** Simple Counter APP
// export default function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// ***** User Profile
// export default function App() {
//   return (
//     <div>
//       <UserProfile />
//     </div>
//   );
// }

// ***** Simple Todo
// export default function App() {
//   return (
//     <div>
//       <TodoList />
//     </div>
//   );
// }

// ***** Form handling
// export default function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// }

// ***** input Focus
// export default function App() {
//   return (
//     <div>
//       <FocusInput />
//     </div>
//   );
// }

// ***** Form Handling

// export default function App() {
//   return (
//     <div>
//       <ContactForm />
//     </div>
//   );
// }

// ***** Event Handling
// export default function App() {
//   return (
//     <div>
//       <EventHandling />
//     </div>
//   );
// }

// ***** With useContext
// export default function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// ***** Counter With useReducer
// export default function App() {
//   return (
//     <div>
//       <UseReducer />
//     </div>
//   );
// }

// ***** Fetching Data
export default function App() {
  return (
    <div>
      <UseEffect />
    </div>
  );
}
