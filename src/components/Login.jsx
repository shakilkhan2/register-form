import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const Login = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    // user login
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/my-profile");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="my-2 w-96 mx-auto bg-[#F7F8F9] px-10 border pt-10 pb-40">
      <h1 className="text-4xl font-bold ">Sign in to your PopX account</h1>
      <p className="text-[#74777B]">
        Please log in first for explore your PopX world.
      </p>

      <form onSubmit={handleLogin} className="mt-6">
        {/* Email */}
        <fieldset className="mb-2 border border-gray-300 ps-2 pb-2 rounded-md">
          <legend className="px-2  text-[#6C25FF] ">Email Address</legend>
          <input
            placeholder="Enter email address"
            type="text"
            required
            id="email"
            name="email"
            className="w-full ps-2 border-none  rounded-md outline-none bg-inherit"
          />
        </fieldset>
        {/* Password */}
        <fieldset className="mb-2 border border-gray-300 ps-2 pb-2 rounded-md">
          <legend className="px-2  text-[#6C25FF] ">Password</legend>
          <input
            placeholder="Enter password"
            type="password"
            required
            id="password"
            name="password"
            className="w-full ps-2 border-none  rounded-md outline-none bg-inherit"
          />
        </fieldset>

        {/* Button */}
        <button
          type="submit"
          className="bg-[#CBCBCB] w-full font-semibold text-white px-4 py-2 rounded-md hover:bg-[#6C25FF] transition duration-300"
        >
          Login
        </button>
      </form>
      <p className="text-sm">
        Don't have an account?
        <Link to="/register">
          {" "}
          <span className="text-[#6C25FF]">Create account.</span>
        </Link>
      </p>
      <p className="mt-10 text-sm text-red-500">{error}</p>
    </div>
  );
};

export default Login;
