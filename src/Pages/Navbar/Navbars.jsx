import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import "./navbar.css"

function NavList() {
  return (
   <div>
     <ul className="my-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-[#23b6e2] transition-colors">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-[#23b6e2] transition-colors">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-[#23b6e2] transition-colors">
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-[#23b6e2] transition-colors">
          Blogs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-[#23b6e2] transition-colors">
          Contact
        </a>
      </Typography>
    </ul>
   </div>
  );
}
const Navbars = () => {

  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
   
    

    return (
      <Navbar className="mt-2 sticky top-0 z-10 max-w-full px-6 py-4">
      <div className="flex w-11/12 mx-auto items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 text-xl font-semibold cursor-pointer py-1.5"
        >
          Mazhar
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            
            <RxCross2 className="text-2xl"></RxCross2>
          ) :

           (
            <MdMenu className="text-2xl"></MdMenu>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
    );
};

export default Navbars;












  