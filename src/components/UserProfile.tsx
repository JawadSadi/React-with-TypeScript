import React, { useState } from "react";

interface UserProfileType {
  name: string;
  email: string;
  age: number;
}

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState<UserProfileType>({
    name: "",
    email: "",
    age: 0,
  });

  const updateName = (name: string) => {
    setUserProfile((prev) => ({ ...prev, name }));
  };
  const updateEmail = (email: string) => {
    setUserProfile((prev) => ({ ...prev, email }));
  };
  const updateAge = (age: number) => {
    setUserProfile((prev) => ({ ...prev, age }));
  };
  return (
    <div>
      <label htmlFor="">Name : </label>
      <input
        type="text"
        value={userProfile.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <br />
      <label htmlFor="">Gmail : </label>
      <input
        type="text"
        value={userProfile.email}
        onChange={(e) => updateEmail(e.target.value)}
      />
      <br />
      <label htmlFor="">Age : </label>
      <input
        type="number"
        value={userProfile.age > 0 ? userProfile.age : ""}
        onChange={(e) => updateAge(+e.target.value)}
      />

      <h1>User Profile : </h1>
      <p>Name : {userProfile.name}</p>
      <p>Gmail : {userProfile.email}</p>
      <p>Age : {userProfile.age}</p>
    </div>
  );
};

export default UserProfile;
