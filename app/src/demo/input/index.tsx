import { Input, Button } from "@superui/styles";
import { useState } from "react";

export function BasicInput() {
  return (
    <div className="inline-flex gap-4 w-full p-4 bg-slate-500 bg-opacity-25 rounded-lg">
      <Input
        placeholder="Placeholder"
        className="text-black dark:text-white"
        variant="primary"
      />
      <Input
        placeholder="Placeholder"
        className="text-black dark:text-white"
        variant="secondary"
      />
      <Input
        placeholder="Placeholder"
        className="text-black dark:text-white"
        variant="danger"
      />
    </div>
  );
}

export function InputWithLabel() {
  return (
    <div className="flex flex-col w-full p-4 bg-slate-500 bg-opacity-25 rounded-lg">
      <label htmlFor="input" className="text-black dark:text-white">
        Label
      </label>
      <Input
        placeholder="Placeholder"
        className="text-black dark:text-white"
        variant="primary"
        id="input"
      />
    </div>
  );
}

export function InForm() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(values));
  };

  return (
    <div className="flex flex-col w-full p-4 bg-slate-500 bg-opacity-25 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 justify-center items-center"
      >
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="text-black dark:text-white">
              First Name
            </label>
            <Input
              placeholder="First Name"
              className="text-black dark:text-white"
              variant="primary"
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="text-black dark:text-white">
              Last Name
            </label>
            <Input
              placeholder="Last Name"
              className="text-black dark:text-white"
              variant="primary"
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-black dark:text-white">
              Email
            </label>
            <Input
              placeholder="Email"
              className="text-black dark:text-white"
              variant="primary"
              id="email"
              name="email"
              type={"email"}
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="tel" className="text-black dark:text-white">
              Tel
            </label>
            <Input
              placeholder="Tel"
              className="text-black dark:text-white"
              variant="primary"
              id="tel"
              name="tel"
              type={"tel"}
              value={values.tel}
              onChange={handleChange}
            />
          </div>
        </div>
        <label htmlFor="password" className="text-black dark:text-white">
          Password
        </label>
        <Input
          placeholder="Password"
          className="text-black dark:text-white"
          variant="primary"
          id="password"
          name="password"
          type={"password"}
          value={values.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}
