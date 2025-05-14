import React, { useRef, useState, type FormEvent } from "react";

interface FormType {
  name: string;
  gmail: string;
  password: string;
}

const Form = () => {
  const [formInfo, setFormInfo] = useState<FormType>({
    name: "",
    gmail: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const gmail = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newItem: FormType = {
      name: name.current!.value,
      gmail: gmail.current!.value,
      password: password.current!.value,
    };

    setFormInfo(newItem);

    name.current!.value = "";
    gmail.current!.value = "";
    password.current!.value = " ";
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Your Name" ref={name} />
      <input type="gmail" placeholder="Enter Your Gmail" ref={gmail} />
      <input type="password" placeholder="Enter Your Password" ref={password} />

      <button type="submit">Submit</button>

      <h1>My Information</h1>
      <p>Name : {formInfo.name}</p>
      <p>Gmail : {formInfo.gmail}</p>
      <p>Password : {formInfo.password}</p>
    </form>
  );
};

export default Form;
