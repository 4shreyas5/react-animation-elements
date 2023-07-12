import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { HashLink as Link } from "react-router-hash-link";
 
export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

 
  return (
    <>
    <div className="bg-black">
      <Navbar className="sticky bg-black top z-10 border-black h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-white">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium font-bold "
          >
            React-UI
          </Typography>
          <div className="flex items-center gap-4">
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <Link to="#animationgrid" smooth>Get Your Design</Link>
            </Button>
          </div>
        </div>
        <MobileNav open={openNav}>
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Get Your Design</span>
          </Button>
        </MobileNav>
      </Navbar>
      </div>
    </>
  );
}