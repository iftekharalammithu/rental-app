import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=" h-full w-full">
      <Navbar></Navbar>
      <main className={` h-fit flex w-full  flex-col pt-14`}>{children}</main>
    </div>
  );
};

export default layout;
