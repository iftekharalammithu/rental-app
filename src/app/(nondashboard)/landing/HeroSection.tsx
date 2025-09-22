"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return (
    <div className=" relative  h-screen">
      <Image
        src={"/landing-splash.jpg"}
        alt="Background Image"
        fill
        className=" object-cover object-center"
      ></Image>
      <div className=" absolute inset-0 bg-black/60"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className=" absolute top-1/3 transform  text-center w-full"
      >
        <div className=" max-w-4xl mx-auto px-16 sm:px-12">
          <h1 className=" text-5xl text-transparent [-webkit-text-stroke:1px_white] font-bold tracking-wider mb-4">
            Start Your journey to finding the perfect place to call home
          </h1>
          <p className=" text-xl text-white mb-8">
            Explore our wide range of the rantle propeties tailored to fit your
            lifestyle and needs
          </p>
          <div className=" flex justify-center">
            <Input
              type={"text"}
              value={"Search Query"}
              onChange={() => {}}
              placeholder="Search by city , neighborhood or country"
              className=" w-full max-w-lg  rounded-none rounded-l-xl border-none bg-white h-12"
            ></Input>
            <Button
              onClick={() => {}}
              className=" bg-red-400 text-white  rounded-none rounded-r-xl border-none hover:bg-red-500 h-12"
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
