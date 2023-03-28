import React, { useState } from "react";

function HookForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPw: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPw: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));

    // Check for errors in real-time
    if (name === "firstName" && value.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First name must be at least 2 characters",
      }));
    } else if (name === "lastName" && value.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Last name must be at least 2 characters",
      }));
    } else if (name === "email" && value.length < 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email must be at least 5 characters",
      }));
    } else if (name === "password" && value.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 8 characters",
      }));
    } else if (name === "confirmPw" && value !== form.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPw: "Passwords do not match",
      }));
    } else {
      // Clear the error message if there are no errors
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span>{errors.firstName}</span>}
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span>{errors.lastName}</span>}
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPw"
              value={form.confirmPw}
              onChange={handleChange}
            />
            {errors.confirmPw && <span>{errors.confirmPw}</span>}
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>Your Info</h1>
        <p>First Name: {form.firstName}</p>
        <p>Last Name: {form.lastName}</p>
        <p>Email: {form.email}</p>
        <p>Password: {form.password}</p>
        <p>Confirm Password: {form.confirmPw}</p>
      </div>
    </div>
  );
}

export default HookForm;
