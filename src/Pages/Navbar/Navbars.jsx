import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import "./navbar.css"
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';




function NavList() {
  return (
   <div>
     <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-1 lg:flex-row lg:items-center lg:gap-6">
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


function ElevationScroll(props) {


   
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

Navbars.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Navbars(props) {

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
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color=''>
          <Toolbar>
          <Navbar 
     className="mt-2 sticky  top-0 z-10 shadow-none max-w-full px-6 py-4">
      <div className="flex w-11/12  mx-auto items-center justify-evenly lg:gap-[48rem] text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="text-xl  font-semibold"
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
     
    </React.Fragment>
  );
}





  