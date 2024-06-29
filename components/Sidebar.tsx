"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="h-screen w-fit sticky flex flex-col left-0 top-0 justify-between bg-dark-1 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col gap-1">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`$
            {link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn("flex gap-4 p-3 items-center justify-start", {
                "bg-gray-1": isActive,
              })}
            >
              <Image
                src={link.img}
                alt={link.label}
                height={24}
                width={24}
                className=""
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {" "}
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
