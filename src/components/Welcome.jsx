import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="my-2 w-96 mx-auto bg-[#F7F8F9] px-10 border pt-60 pb-10">
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">Welcome to PopX</h1>
        <p className="text-[#74777B]">Please log in for further procedure.</p>
      </div>
      <Link to={"./register"}>
        <button className="bg-[#6C25FF] text-[#fff] w-full text-center flex justify-center  font-semibold py-2 px-4 mx-auto rounded-md my-4">
          Create Account
        </button>
      </Link>
      <Link to={"./login"}>
        <button className="bg-[#CEBAFB]  w-full text-center flex justify-center  font-semibold py-2 px-4 mx-auto rounded-md">
          Already Registered? Login
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
