"use client";

import React from "react";
import { NavlinksContainer, StyledLink } from "@/themes/themes";
import Link from "next/link";
import {  usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Configurator", path: "/configurator" },
  { name: "Contact", path: "/contact" },
];

const Navlink = () => {
  const pathname = usePathname()
  return (
    <NavlinksContainer>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.path}>
            <StyledLink variant="body2" className="heading" props={{isActive :pathname === link.path}}>{link.name}</StyledLink>
          </Link>
        );
      })}
    </NavlinksContainer>
  );
};

export default Navlink;
