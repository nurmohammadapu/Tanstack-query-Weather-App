'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";

const Navbar = () => {
    const { theme } = useTheme();
  return (
    <div className="stikcy top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* logo  */}
        <Link href="/">
          <Image 
          src={theme ==="dark" ? "/logo.png" : "/logo2.png"} 
          width={56} 
          height={56} 
          alt="Logo picture" />
        </Link>

        {/* theme toggle  */}
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
