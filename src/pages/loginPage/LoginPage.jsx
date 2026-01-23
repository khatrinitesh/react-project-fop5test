import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import {
//   isAdminCredentials,
//   validateEmail,
//   validatePassword,
// } from "../../utils/utils";
import Button from "../../components/button/Button";
import FieldInput from "./../../components/fieldInput/FieldInput";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "demo@velarium.com",
    password: "password123", // Don't use ********** as actual password
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy validation (you can replace with real one)
    const { email, password } = form;
    const newErrors = {};

    if (!email.includes("@")) {
      newErrors.email = "Invalid email address";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Dummy credentials check
    if (email === "demo@velarium.com" && password === "password123") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    document.body.classList.add("body-login-bg");
    return () => {
      document.body.classList.remove("body-login-bg");
    };
  }, []);

  return (
    <div className="min-h-screen w-full px-[1rem] flex items-center justify-center bg-color2">
      <div className="bg-[#010d4a] shadow rounded-[20px] border-[3px] border-[#b5f5f8] p-[20px] w-full max-w-full md:max-w-[60%] lg:max-w-[40%] 2xl:max-w-[35%]">
        <div className="logoBlock flex justify-center">
          <img
            src="/img/logo-velarium.png"
            alt="logo"
            className="mx-auto block max-w-[200px]"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid bg-white px-[20px] lg:px-[50px] py-[30px]"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-[10px]">
            <label className="montserrat-medium text-black text-smallDescription">
              Username:
            </label>
            <FieldInput
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              variant="default"
              className="!bg-[#d9e7ee]  "
            />
          </div>

          <hr className="h-[2px] bg-black border-none my-5" />

          <div className="flex flex-col lg:flex-row lg:items-center gap-[10px]">
            <label className="montserrat-medium text-black text-smallDescription">
              Password:
            </label>
            <FieldInput
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
              variant="default"
              className="!bg-[#d9e7ee]"
            />
          </div>

          <hr className="h-[2px] bg-black border-none my-5" />

          <div className="btnBlock">
            <Button
              type="submit"
              label="Login"
              variant="color4"
              isLoading={false}
              className="rounded-full w-[40%] mx-auto uppercase"
            />
          </div>
        </form>

        <p className="text-center text-extraSmallDescription text-white mt-4">
          Forgot your password? Click{" "}
          <a href="#" className="underline text-color3 font-bold">
            here
          </a>{" "}
          to reset.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
