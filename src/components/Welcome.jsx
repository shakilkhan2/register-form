import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
       <div className=' bg-[#F7F8F9] '>
         <div className='text-center mt-20'>
            <h1 className='text-4xl font-bold'>Welcome to PopX</h1>
            <p>Please log in for further procedure.</p>
        </div>
        <Link to={"./register"}>
        <button className='bg-[#6C25FF] text-[#fff] w-72 text-center flex justify-center text-xl py-2 mx-auto rounded-md my-4'>create Account</button>
        </Link>
        <Link to={"./login"}>
        <button className='bg-[#CEBAFB]  w-72 text-center flex justify-center text-xl py-2 mx-auto rounded-md'>Already Registered? Login</button>
        </Link>
       </div>
    );
};

export default Welcome;