"use client";
import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.history.back();
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className=" flex h-screen items-center justify-center">
      <h1>There is no Page</h1>
    </div>
  );
};

export default NotFound;
