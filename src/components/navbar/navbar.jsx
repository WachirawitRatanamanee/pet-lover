"use client";

import HomeNavbar from "./home";
import GeneralNavbar from "./general";
import { usePathname } from "next/navigation";
import SigninNavbar from "./SigninNavbar";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav>
      {pathName === "/" ? (
        <HomeNavbar />
      ) : pathName === "/login" || pathName === "/register" ? (
        <SigninNavbar />
      ) : (
        <GeneralNavbar />
      )}
    </nav>
  );
};

export default Navbar;
