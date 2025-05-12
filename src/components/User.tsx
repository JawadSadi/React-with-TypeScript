import React, { type FC, type ReactNode } from "react";

type userShape = {
  children: ReactNode;
  name: string;
  age: number;
  isStudent: boolean;
};

const User: FC<userShape> = ({ children, name, age, isStudent }) => {
  return (
    <div>
      {children}
      <h2>My name is: {name}</h2>
      <h2>I am {age} years old</h2>
      <h2>And for now {isStudent ? "I am a student" : "I am not a student"}</h2>
    </div>
  );
};

export default User;
