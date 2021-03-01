import React from 'react'

const Header: React.FC = () => {
    return (
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                Check 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                    Your City 
            </span>
             to protect yourself
          </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                Check predicted air quality index for your city so you can keep your healt on point.
          </p>
        </div>
    );
}

export default Header;