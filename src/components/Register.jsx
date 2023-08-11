import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="my-2 w-96 mx-auto bg-[#F7F8F9] px-10 border py-2">
      <h1 className="text-4xl font-bold ">
        Create your <br /> PopX account
      </h1>

      <form className="mt-6">
        {/* Name */}
        <fieldset className="mb-2 border border-gray-300 ps-2 pb-2 rounded-md">
          <legend className="px-2  text-[#6C25FF] ">
            Full Name<span className="text-red-500">*</span>
          </legend>
          <input
            placeholder="Enter Your Name"
            type="text"
            required
            id="name"
            name="name"
            className="w-full ps-2 border-none  rounded-md outline-none bg-inherit"
          />
        </fieldset>
        {/* Phone Number */}
        <fieldset className="mb-2 border border-gray-300 ps-2 pb-2 rounded-md">
          <legend className="px-2  text-[#6C25FF] ">
            Phone number<span className="text-red-500">*</span>
          </legend>
          <input
            placeholder="Phone Number"
            type="number"
            required
            id="number"
            name="number"
            className="w-full ps-2 border-none  rounded-md outline-none bg-inherit"
          />
        </fieldset>
        {/* Email */}
        <fieldset className="mb-2 border border-gray-300 ps-2 pb-2 rounded-md">
          <legend className="px-2  text-[#6C25FF] ">
            Email Address<span className="text-red-500">*</span>
          </legend>
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
          <legend className="px-2  text-[#6C25FF] ">
            Password<span className="text-red-500">*</span>
          </legend>
          <input
            placeholder="Enter password"
            type="password"
            required
            id="password"
            name="password"
            className="w-full ps-2 border-none  rounded-md outline-none bg-inherit"
          />
        </fieldset>
        {/* Company Name */}
        <fieldset className="mb-2 border border-gray-300 ps-2 pb-2 rounded-md">
          <legend className="px-2  text-[#6C25FF] ">
            Company name
          </legend>
          <input
            placeholder="Enter Your Name"
            type="text"
            required
            id="name"
            name="name"
            className="w-full ps-2 border-none  rounded-md outline-none bg-inherit"
          />
        </fieldset>

        <p className="">
          Are you an Agency?<span className="text-red-500">*</span>
        </p>

        <div className="flex items-center space-x-4">
          <input
            type="radio"
            id="yes"
            name="response"
            value="yes"
            className="w-4 h-4 accent-[#6C25FF]"
          />
          <label htmlFor="yes">Yes</label>

          <input
            type="radio"
            id="no"
            name="response"
            value="no"
            className="w-4 h-4 accent-[#6C25FF]"
          />
          <label htmlFor="no">No</label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-[#6C25FF] w-full font-semibold text-white px-4 py-2 rounded-md  transition duration-300 mt-10"
        >
          Create Account
        </button>
      </form>
      <p className="text-sm">
        Already have an account?
        <Link to="/login">
          {" "}
          <span className="text-[#6C25FF]">Login here.</span>
        </Link>
      </p>
    </div>
  );
};

export default Register;
