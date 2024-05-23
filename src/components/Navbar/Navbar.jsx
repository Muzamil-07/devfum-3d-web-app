import Image from "next/image";
import Devfum from "/public/devfum.png";
import { MainContainer, NavbarContainer } from "@/themes/themes";
import Link from "next/link";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <>
      <MainContainer maxWidth='xl'>
        <NavbarContainer>
          <Link href='/'>
            <Image src={Devfum} style={{ height: "49px", width: "109px" }} alt='logo' />
          </Link>
          <Navlink />
        </NavbarContainer>
      </MainContainer>
    </>
  );
};

export default Navbar;
