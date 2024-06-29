import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="fixed flex justify-between z-50 w-full bg-[#0f172a] px-6 py-3 lg:px-10  ">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-gray-100 max-sm:hidden">
          {" "}
          WeCALL
        </p>
      </Link>
      <div className="flex justify-between gap-5">
       <SignedIn>
        <UserButton/>
       </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
