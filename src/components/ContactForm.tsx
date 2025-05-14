import React, { useState, type ChangeEvent, type FormEvent } from "react";

interface FormType {
  name: string;
  gmail: string;
  number: number;
}
export default function ContactForm() {
  const [formData, setFormData] = useState<FormType>({
    name: "",
    gmail: "",
    number: 0,
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", gmail: "", number: 0 });
  }

  return (
    <div>
      <h2>Contact us :</h2>
      <form
        onSubmit={handleSubmit}
        style={{ border: "2px solid black", padding: "10px" }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="gmail"
          name="gmail"
          placeholder="Enter your Gmail"
          value={formData.gmail}
          onChange={handleChange}
        />
        <input
          type="number"
          name="number"
          placeholder="Enter your number"
          value={formData.number > 0 ? formData.number : ""}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
