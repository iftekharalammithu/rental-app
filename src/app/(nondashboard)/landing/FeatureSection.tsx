"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const FeatureSection = () => {
  const containerVariatent = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  };

  const itenvariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: false }}
      variants={containerVariatent}
      className=" py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white"
    >
      <div className=" max-w-4xl xl:max-w-6xl items-center flex flex-col justify-center mx-auto">
        <motion.h2 className=" text-3xl font-bold  text-center mb-12 w-full sm:w-2/3">
          Quickly find the home you want using our effective search filter
        </motion.h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div key={i} variants={itenvariant}>
              {/* <FeatureCard></FeatureCard> */}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureSection;

const FeatureCard = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}: {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) => {
  return (
    <div className=" text-center">
      <div className=" p-4 rounded-lg mb-4 flex items-center justify-center h-48">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={400}
          className=" w-full h-full object-contain"
        ></Image>
      </div>
      <h3 className=" text-xl font-semibold mb-2">{title}</h3>
      <p className=" mb-4">{description}</p>
      <Link
        href={linkHref}
        className=" inline-block border border-gray-300 rounded px-4 hover:bg-gray-400"
        scroll={false}
      >
        {linkText}
      </Link>
    </div>
  );
};
