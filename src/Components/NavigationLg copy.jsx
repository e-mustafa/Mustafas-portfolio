import React from 'react'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import '../Styles/NavigationLg.css'
import { FaHome, FaUser, FaBriefcase, FaEnvelopeOpen, FaComments } from "react-icons/fa";



const NavigationLg = () => {




   return (
      <div>
         <ul style={{listStyle:'none'}}>

            <Box display='flex' flexDirection='column' justifyContent='space-between' alignItems='end'
               color='white' gap={3} fontSize={18} fontWeight="bold">

               <div className='iconPage'>
                  <div className='iconIcon'> <FaHome /> </div>
                  <div className='iconlable'>
                     <Typography  variant='h6'> Home </Typography>
                  </div>
               </div>

               <div className='iconPage'>
                  <div className='iconIcon'> <FaUser /> </div>
                  <div className='iconlable'>
                     <Typography  variant='h6'> About Me </Typography>
                  </div>
               </div>

               <div className='iconPage'>
                  <div className='iconIcon'> <FaBriefcase /> </div>
                  <div className='iconlable'>
                     <Typography  variant='h6'> Projects </Typography>
                  </div>
               </div>

               <div className='iconPage'>
                  <div className='iconIcon'> <FaEnvelopeOpen /> </div>
                  <div className='iconlable'>
                     <Typography  variant='h6'> Contact </Typography>
                  </div>
               </div>

               <div className='iconPage'>
                  <div className='iconIcon'> <FaComments /> </div>
                  <div className='iconlable'>
                     <Typography  variant='h6'> Comments </Typography>
                  </div>
               </div>

            </Box>
         </ul>
      </div>
   )
}
export default NavigationLg;