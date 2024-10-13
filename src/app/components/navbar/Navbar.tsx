import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  // Button,
} from "@nextui-org/react";
import Image from "next/image";
import Logo from "../../../../public/logo/ksb_logo_mini.png";

const scrollToSection = (targetId: string) => {
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
    });
  }
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["ໜ້າຫຼັກ", "ການບໍລິການ", "ກ່ຽວກັບ", "ຜົນງານ", "ລູກຄ້າ"];

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={Logo} alt="logo" width={50} height={50}></Image>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#" color="foreground" onClick={() => scrollToTop()}>
            ໜ້າຫຼັກ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#services"
            color="foreground"
            onClick={() => scrollToSection("#services")}
          >
            ການບໍລິການ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#about"
            onClick={() => scrollToSection("#about")}
          >
            ກ່ຽວກັບ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#portfolio"
            onClick={() => scrollToSection("#portfolio")}
          >
            ຜົນງານ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#customer"
            onClick={() => scrollToSection("#customer")}
          >
            ລູກຄ້າ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                // index === 4
                //   ? "primary"
                //   : index === menuItems.length - 1
                //   ? "danger"
                //   : "foreground"
                "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
              onClick={() => {
                if (index === 0) {
                  scrollToTop(); // ຫນ້າຫຼັກ
                } else if (index === 1) {
                  scrollToSection("#services"); // ບໍລິການ
                } else if (index === 2) {
                  scrollToSection("#about"); // ກ່ຽວກັບ
                } else if (index === 3) {
                  scrollToSection("#portfolio"); // ຜົນງານ
                } else if (index === 4) {
                  scrollToSection("#customer"); // ລູກຄ້າ
                }
                setIsMenuOpen(false); // ปิดเมนูหลังจากกดลิงก์
              }}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
