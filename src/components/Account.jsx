import React from "react";
import { FaBeer, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="my-2 w-96 mx-auto   border  ">
      <h3 className="font-semibold text-xl my-4 px-4">Account Settings</h3>
      <div className="bg-[#F7F8F9] w-100% py-10 px-4">
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=740&t=st=1691839010~exp=1691839610~hmac=282a9b0cb80c94df97f9a52c3f01d7a5a7ae2a69d51ac7749aa605f832313efa"
            alt=""
          />
          <div className="ml-6">
            <h1 className="text-xl font-bold">Harry Potter</h1>
            <p className="font-semibold text-sm">email@gmail.com</p>
          </div>
        </div>
        <p className="my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          vero vel? Soluta modi et sed, possimus ut nisi totam minima.
        </p>
      </div>
      <Link to="/">
        {" "}
        <FaHome className="mx-auto text-2xl text-gray-500 mt-40 mb-10 hover:text-[#6C25FF]" />
      </Link>
    </div>
  );
};

export default Account;
