import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import FieldInput from "../../components/fieldInput/FieldInput";
import CheckboxComponent from "../../components/checkboxComponent/CheckboxComponent";
import { CHECKBOX_OPTIONS } from "../../constants/constants";

const LoginPage = () => {
  const navigate = useNavigate();

  // =====================
  // STATE
  // =====================
  const [form, setForm] = useState({
    email: "manish@velarium.com",
    password: "N3xtw0rld",
  });

  const [checkboxes, setCheckboxes] = useState({
    rememberUserId: true,
    rememberDevice: false,
  });

  const [errors, setErrors] = useState({});

  // =====================
  // HANDLERS
  // =====================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // =====================
  // VALIDATION
  // =====================
  const validateForm = () => {
    const newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "User Id is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Invalid email address";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // =====================
  // SUBMIT
  // =====================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // ---- Dummy credentials check ----
    if (
      form.email === "manish@velarium.com" &&
      form.password === "N3xtw0rld"
    ) {
      localStorage.setItem("isAuthenticated", "true");

      if (checkboxes.rememberUserId) {
        localStorage.setItem("rememberUserId", form.email);
      } else {
        localStorage.removeItem("rememberUserId");
      }

      localStorage.setItem(
        "rememberDevice",
        checkboxes.rememberDevice ? "true" : "false"
      );

      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  // =====================
  // EFFECT
  // =====================
  useEffect(() => {
    document.body.classList.add("body-login-bg");
    return () => document.body.classList.remove("body-login-bg");
  }, []);

  // =====================
  // JSX
  // =====================
  return (
    <div className="min-h-screen w-full px-[1rem] flex items-center justify-center bg-color2">
      <div className="bg-[#010d4a] shadow rounded-[20px] border-[3px] border-[#b5f5f8] p-[20px] w-full max-w-full md:max-w-[60%] lg:max-w-[45%] 2xl:max-w-[35%] grid gap-3">
        
        {/* LOGO */}
        <div className="logoBlock flex justify-center">
          <img
            src="/img/logo-fop5test.png"
            alt="logo"
            className="mx-auto block max-w-[200px]"
          />
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid bg-white px-[20px] lg:px-[40px] p-[30px]"
        >
          <h2 className="text-center text-(--color1) font-bold uppercase text-xl mb-3">
            Account Login
          </h2>

          {/* USER ID */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-[10px]">
            <label className="montserrat-medium text-black text-smallDescription md:w-[20%]">
              User Id:
            </label>
            <FieldInput
              name="email"
              type="text"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              className="!bg-[#d9e7ee]"
            />
          </div>

          <hr className="h-[1px] bg-black border-none my-5" />

          {/* PASSWORD */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-[10px]">
            <label className="montserrat-medium text-black text-smallDescription md:w-[20%]">
              Password:
            </label>
            <FieldInput
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
              className="!bg-[#d9e7ee]"
            />
          </div>

          <hr className="h-[1px] bg-black border-none my-5" />

          {/* CHECKBOXES */}
          <div className="flex flex-col gap-2  mb-6">
            <CheckboxComponent
              name="rememberUserId"
              label={CHECKBOX_OPTIONS.REMEMBER_USER_ID}
              checked={checkboxes.rememberUserId}
              onChange={handleCheckboxChange}
            />
            <CheckboxComponent
              name="rememberDevice"
              label={CHECKBOX_OPTIONS.REMEMBER_DEVICE}
              checked={checkboxes.rememberDevice}
              onChange={handleCheckboxChange}
            />
          </div>

          {/* SUBMIT */}
          <div className="btnBlock">
            <Button
              type="submit"
              label="Sign In"
              variant="color4"
              className="rounded-full w-[40%] mx-auto uppercase"
            />
          </div>
        </form>

        {/* LINKS */}
        <div className="grid gap-1">
          <Link to="/forgot-password" className="text-center text-(--color3) font-bold text-xs">
            Forgot password?
          </Link>
          <Link to="/reset-mfa" className="text-center text-(--color3) font-bold text-xs">
            Reset MFA?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
