import React from 'react'
import { IconButton, Stack } from '@mui/material'

import '../Styles/TogleTheme.css'
import { RiSunFill } from "react-icons/ri";
import { FaMoon } from "react-icons/fa";



export default function TogleTheme({toggleDark, settoggleDark}) {
   console.log(toggleDark);
   return (
      <div>
         <Stack zIndex={99} position="absolute" top={20} right={30}>
            <IconButton
             className='themeIcon'
             onClick={()=> settoggleDark(!toggleDark)}
            >
               {toggleDark? <FaMoon className='togleIco' /> : <RiSunFill className='togleIco' />}
            </IconButton>
         </Stack>
      </div>
   )
}
