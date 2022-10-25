import React from 'react'
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import '../Styles/NavigationLg.css'
import { FaHome, FaUser, FaBriefcase, FaEnvelopeOpen } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';



const NavigationLg = () => {

   const navigate = useNavigate()
   const location = useLocation()
   console.log(location.pathname);


   return (

      <Stack zIndex={99} position="fixed" top='50%' right={40} sx={{transform: 'translateY(-50%)'}}
       display={{xs:'none', lg:'flex'}} >
         <ul style={{listStyle:'none'}}>

            <Box display='flex' flexDirection='column' justifyContent='space-between' alignItems='end'
                gap={3} fontSize={18} fontWeight="bold" >

               <div className='circle-btn' onClick={() => navigate('/')}>
                  <Box className={location.pathname === '/' ? 'circle-btn-icon pageActive' : 'circle-btn-icon' }
                   bgcolor='action.disabledBackground' color='text.secondary' >
                     <FaHome />
                  </Box>
                  <div className='circle-btn-text'>
                     <Typography  variant='h6'> Home </Typography>
                  </div>
               </div>

               <div className='circle-btn' onClick={() => navigate('/about')}>
                  <Box className={location.pathname === '/about' ? 'circle-btn-icon pageActive' : 'circle-btn-icon' }
                   bgcolor='action.disabledBackground' color='text.secondary'  >
                     <FaUser />
                  </Box>
                  <div className='circle-btn-text'>
                     <Typography  variant='h6'> About Me </Typography>
                  </div>
               </div>

               <div className='circle-btn' onClick={() => navigate('/Portfolio')} >
                  <Box className={location.pathname === '/Portfolio' ? 'circle-btn-icon pageActive' : 'circle-btn-icon' }
                   bgcolor='action.disabledBackground' color='text.secondary' >
                   <FaBriefcase />
                  </Box>
                  <div className='circle-btn-text'>
                     <Typography  variant='h6'> Portfolio </Typography>
                  </div>
               </div>

               <div className='circle-btn' onClick={() => navigate('/contact')} >
                  <Box className={location.pathname === '/contact' ? 'circle-btn-icon pageActive' : 'circle-btn-icon' }
                   bgcolor='action.disabledBackground' color='text.secondary' >
                      <FaEnvelopeOpen />
                  </Box>
                  <div className='circle-btn-text'>
                     {/* <Typography  variant='h6'> Contact </Typography> */}
                     Contact
                  </div>
               </div>

            </Box>
         </ul>
      </Stack>
   )
}
export default NavigationLg;