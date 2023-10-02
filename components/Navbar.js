"use client"
import React from "react";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image.js";

export default function NavigationBar() {
  return (
    <Navbar className="bg-transparent py-4" maxWidth="xl">
      <NavbarBrand justify="start">
        <p className="text-inherit -tracking-wide font-semibold text-xl">TAUSIF AHMED</p>
      </NavbarBrand>
      <NavbarContent  className="hidden sm:flex gap-10 uppercase" justify="center">
        <NavbarItem isActive>
          <Link className="" href="/" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="" color="foreground" href="/works">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="" color="foreground">
            Let's Connect
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden uppercase font-semibold lg:flex">
        <Button as={Link} className="bg-white rounded-full shadow-purple-500 text-lg text-black lowercase" href="#" variant="flat">
            tausif.ritu1@gmail.com
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button className="border px-7 rounded-sm border-purple-800 bg-transparent shadow-sm text-purple-900 text-md font-semibold hover:bg-purple-800 hover:text-white">
        RESUME
      </Button> 
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
