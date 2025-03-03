import React from "react";
import Logo from "../assets/img/logo.png";

const Login = () => {
  return (
    <div className="flex justify-center items-center flex-col flex-grow py-12 h-screen px-2">
      <div className="border rounded-md p-8 w-full max-w-sm shadow-lg bg-white">
        <div className="flex items-center justify-center gap-0 mb-6">
          <img src={Logo} alt="" className="h-[40px] " />
          <p className="text-primary text-xl italic font-black">PARFLY</p>
        </div>

        <form action="#">
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1 text-text">
              Phone number or email
            </label>
            <input
              type="text"
              className="w-full border border-t-0 border-r-0 border-l-0 border-b-1  border-b-gray-300 outline-none py-2 text-text text-xs"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-xs font-medium mb-1 text-text">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-t-0 border-r-0 border-l-0 border-b-1  border-b-gray-300 outline-none py-2 text-text text-xs"
              placeholder="Enter password"
            />
          </div>

          <div className="flex justify-between items-center text-xs mb-6">
            <label className="flex items-center text-text">
              <input type="checkbox" className="mr-2 text-text" />
              Remember Me
            </label>
            <a href="#" className="text-primary hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-sm text-white py-2 rounded-md hover:bg-orange-600"
          >
            Login
          </button>

          <p className="text-xs text-center mt-4 text-text">
            Don’t have an account?&nbsp;
            <a href="/register" className="text-primary hover:underline">
              Create a free account
            </a>
          </p>
        </form>

        <div className="flex items-center my-3">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-xs text-gray-500">Or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-md mb-2 hover:bg-gray-50 text-blue-500 text-xs font-semibold border-gray-400">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFKGkE0n-MIDhhhVId5GpfwSz5wcPvTJ_Zw&s"
            alt="Facebook"
            className="h-4"
          />
          Continue with Facebook
        </button>

        <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-md mb-2 hover:bg-gray-50 text-black text-xs font-semibold border-gray-400">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5FqrS9OkN5XrA5_GXcN7OV-SoLIl0KPwoQ&s"
            alt="Google"
            className="h-4"
          />
          Continue with Google
        </button>
      </div>

      <div className="flex justify-center items-center">
        <a href="#" className="inline text-xs underline text-text">
          Terms and Condition
        </a>
        <p>&nbsp; · &nbsp;</p>
        <a href="#" className="inline text-xs underline text-text">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Login;
