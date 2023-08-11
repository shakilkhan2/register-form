import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-20 w-96 mx-auto">
      <div className="">
        <h1 className="text-4xl font-bold ">Sign in to your PopX account</h1>
        <p className="text-[#74777B]">
          Please log in first for explore your PopX world.
        </p>
      </div>

      <form>
        {/* Email */}
        <fieldset className="mb-2 border border-gray-300 ps-2 pb-2 rounded-md">
          <legend className="px-2 bg-white text-[#6C25FF] ">
            Email Address
          </legend>
          <input
            placeholder="Enter email address"
            type="text"
            required
            id="email"
            name="email"
            className="w-full ps-2 border-none  rounded-md outline-none"
          />
        </fieldset>
        {/* Password */}
        <fieldset className="mb-2 border border-gray-300 ps-2 pb-2 rounded-md">
          <legend className="px-2 bg-white text-[#6C25FF] ">Password</legend>
          <input
            placeholder="Enter password"
            type="password"
            required
            id="password"
            name="password"
            className="w-full ps-2 border-none  rounded-md outline-none"
          />
        </fieldset>

    

        {/* Button */}
        <button
          type="submit"
          className="bg-[#CBCBCB] w-full font-bold text-white px-4 py-2 rounded hover:bg-[#6C25FF] transition duration-300"
        >
          Login
        </button>
      </form>
      <p className="text-sm">Don't have an account?<Link to="/register"> <span className="text-[#6C25FF]">Create account.</span></Link></p>
    </div>
  );
};

export default Login;