
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import CopySvg from "./CopySvg"

export default function NavigationBar() {
  return (
    <Navbar className="bg-transparent py-0" maxWidth="xl">
      <NavbarBrand justify="start">
        <p className="text-inherit -tracking-wide font-semibold text-xl">TAUSIF AHMED</p>
      </NavbarBrand>
      <NavbarContent  className="hidden sm:flex gap-10 uppercase" justify="center">
        <NavbarItem isActive>
          <NavLink className="" to="/" aria-current="page">
            About
          </NavLink>
        </NavbarItem>
        <NavbarItem isActive>
          <NavLink className="" color="foreground" to="/portfolio">
            Portfolio
          </NavLink>
        </NavbarItem>
        <NavbarItem isActive>
            Let's Connect
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden uppercase font-semibold lg:flex">
        <Button as={Link} className="bg-white rounded-full shadow-purple-500 text-lg text-black lowercase" href="#" variant="flat">
            tausif.ritu1@gmail.com
            <div className="p-2 bg-gray-100 hover:bg-gray-300 rounded-full">
            <CopySvg/>
            </div>
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
