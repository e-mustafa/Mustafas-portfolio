import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { FaHome, FaUser, FaBriefcase, FaEnvelopeOpen, FaComments } from "react-icons/fa";


const NavbarBottom = () => {
   const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
   }


   return (
      <div>
         <BottomNavigation sx={{ width: 500 }}  value={value} onChange={handleChange}>
            <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<FaHome />}
            />
            <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FaUser />}
            />
            <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<FaBriefcase />}
            />
            <BottomNavigationAction label="Folder" value="folder" icon={<FaEnvelopeOpen />} />
         </BottomNavigation>
      </div>
   )
}
export default NavbarBottom ;