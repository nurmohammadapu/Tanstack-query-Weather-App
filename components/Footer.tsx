import React from "react";
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
        <div className="container mx-auto transition-all duration-200 hover:text-blue-500 px-4 text-center">
            <Link href='https://www.facebook.com/nurmohammad.apu.5/'>
            Made with 💗 by Nur Mohammad Apu
            </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

