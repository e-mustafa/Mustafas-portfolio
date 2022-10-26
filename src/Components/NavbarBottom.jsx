import React, { Fragment, useEffect, useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Box, } from '@mui/material';
import { FaHome, FaUser, FaBriefcase, FaEnvelopeOpen, } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';


const NavbarBottom = () => {
   const navigate = useNavigate()
   const location = useLocation()

   const [value, setValue] = useState( );


   useEffect(()=>{
      switch (location.pathname) {
         case '/':
            setValue(0)
            break;
         case '/about':
            setValue(1)
            break;
         case '/Portfolio':
            setValue(2)
            break;
         case '/contact':
            setValue(3)
            break;
         default:
            setValue(0)
            break;
      }
   },[location.pathname])


   return (
      <Fragment>
         <Box height='56px' display={{xs:'block', lg:'none'}} ></Box>

         <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,}}  elevation={3}
          display={{xs:'block', lg:'none'}} zIndex={20}  >

            <BottomNavigation sx={{bgcolor:"#1a1a1a"}} value={value}
               onChange={(event, newValue, ) => {
                  setValue(newValue);
                  navigate(event.currentTarget.attributes.link.value );
               }}
            >
               <BottomNavigationAction  sx={{color:'#ffffff'}} link='/' label="Home" icon={<FaHome />} />
               <BottomNavigationAction sx={{color:'#ffffff'}} link='/about' label="Abute Me" icon={<FaUser />} />
               <BottomNavigationAction sx={{color:'#ffffff'}} link='/Portfolio' label="Portfolio" icon={<FaBriefcase />} />
               <BottomNavigationAction sx={{color:'#ffffff'}} link='/contact' label="Contact" icon={<FaEnvelopeOpen />} />
            </BottomNavigation>
         </Box>
      </Fragment>
   )
}
export default NavbarBottom ;