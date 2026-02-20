import React from "react";

const Hello = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 flex flex-col justify-center items-center text-center space-y-4">
        
        <h2 className="text-sm sm:text-base tracking-widest text-[#5ed1c8] uppercase">
          How It Works
        </h2>

        <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-blue-900 leading-tight">
          Say Hello to Top Dog Leads!
        </h1>

        <p className="text-gray-500 max-w-2xl text-sm sm:text-base mt-4">
          Sign up for our newsletter and receive 40% discount on your first project.
        </p>

        {/* Input + Button Wrapper */}
        <div className="w-full max-w-xl mt-8">
          
          {/* Input */}
          <div className="flex items-center bg-white border border-gray-200 rounded-full overflow-hidden shadow-sm">
            <input
              type="url"
              placeholder="http://yoursite.com"
              className="flex-1 px-5 py-3 text-sm sm:text-base outline-none"
            />

            {/* Desktop Button */}
            <button className="hidden sm:block px-8 py-3 text-sm font-semibold text-white rounded-full 
          bg-[#1c2d56] hover:bg-[#1c2d56]/90 transition rounded-md ">
              Sign Up
            </button>
          </div>

          {/* Mobile Button */}
          <button className="sm:hidden w-full mt-4 px-8 py-3 text-sm font-semibold text-white rounded-full 
          bg-[#1c2d56] hover:bg-[#1c2d56]/90 transition rounded-md">
            Sign Up
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hello;