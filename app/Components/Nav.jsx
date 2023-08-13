"use client";

import Link from "next/link";
import React from "react";

// Navbar

const Nav = () => {
  // List of Categories for Navbar
  const links = ["tech", "science", "entertainment", "music"];
  return (
    <nav className="fixed w-full bg-white shadow-md right-0 left-0 px-10">
      {/* Navbar left part */}
      <div className="flex w-full justify-between">
        <div className="flex flex-row items-baseline gap-6">
          <Link href="/" className="flex gap-2  items-center">
            <h1 className="font-primary italic font-semibold text-[50px] mr-14">
              Voyage.
            </h1>
          </Link>

          {/* Looping through the links list and displaying it on the navbar */}
          {links.map((link, index) => (
            <Link key={index} href={`/category/${link}`} className="flex gap-3">
              <p className="font-primary capitalize">{link}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
