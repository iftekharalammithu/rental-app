import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className=" fixed top-0 left-0 w-full z-50 shadow-xl h-14">
      <div className=" flex justify-between items-center w-full py-3 px-8 bg-primary text-white">
        <div className=" flex items-center gap-4  md:gap-6">
          <Link
            href={"/"}
            className=" cursor-pointer hover:text-purple-300"
            scroll={false}
          >
            <div className=" flex items-center gap-3">
              <Image
                src={"/logo.svg"}
                alt="logo"
                height={24}
                width={24}
                className=" w-6 h-6"
              ></Image>
              <div className=" text-xl font-bold">
                EENT<span className=" to-red-400 font-light">IFUL</span>
              </div>
            </div>
          </Link>
        </div>
        <p className=" text-white hidden md:block">
          Display your perfect rental apartment with our advanced search
        </p>
        <div className=" flex items-center gap-5">
          <Link href={"/signin"}>
            <Button
              className="  text-white bg-transparent hover:bg-white hover:text-black rounded-lg"
              variant={"outline"}
            >
              Sign In
            </Button>
          </Link>
          <Link href={"/signup"}>
            <Button
              className="  text-white bg-transparent hover:bg-white hover:text-black rounded-lg"
              variant={"outline"}
            >
              Sign UP
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
