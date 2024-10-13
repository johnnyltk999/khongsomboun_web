import React from "react";
import Logo from "../../../../public/logo/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto mb-36 px-4 md:px-0">
      {" "}
      {/* Add padding on small screens */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <Image
          className="z-20 w-40 h-40 md:w-64 md:h-64 lg:w-96 lg:h-96 transform transition duration-500 hover:scale-105 shadow-xl rounded-lg"
          src={Logo}
          alt="logo"
          width={400}
          height={400}
        />

        <div className="flex flex-col items-center mb-6">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 text-center text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-5 font-bold tracking-tight">
            KHONGSOMBOUN
          </h2>

          <div className="mx-auto h-1 w-full border-3 border-primaryBase mt-4"></div>
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 text-center text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-5 font-bold tracking-tight">
            TECNOLOGY
          </h2>
        </div>
      </div>
      <a href="#projects">
        <div className="mt-10 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <button className="w-44 h-12 rounded-md border-2 border-primaryBase text-white text-sm transition duration-300 hover:bg-primaryBase">
            ໂຄງການຜ່ານມາ
          </button>
        </div>
      </a>
    </div>
  );
}
