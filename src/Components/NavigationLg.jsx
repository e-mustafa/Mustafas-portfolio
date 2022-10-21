import React from 'react'
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import '../Styles/NavigationLg.css'
import { FaHome, FaUser, FaBriefcase, FaEnvelopeOpen, FaComments } from "react-icons/fa";
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
               color='white' gap={3} fontSize={18} fontWeight="bold" >

               <div className='iconPage'  onClick={() => navigate('/')}>
                  <div className={location.pathname === '/' ? 'iconIcon pageActive' : 'iconIcon' }>
                     <FaHome />
                  </div>
                  <div className='iconlable'>
                     <Typography  variant='h6'> Home </Typography>
                  </div>
               </div>

               <div className='iconPage'  onClick={() => navigate('/about')}>
                  <div className={location.pathname === '/about' ? 'iconIcon pageActive' : 'iconIcon' } >
                     <FaUser />
                  </div>
                  <div className='iconlable'>
                     <Typography  variant='h6'> About Me </Typography>
                  </div>
               </div>

               <div className='iconPage' onClick={() => navigate('/Portfolio')} >
                  <div className={location.pathname === '/Portfolio' ? 'iconIcon pageActive' : 'iconIcon' } >
                   <FaBriefcase />
                  </div>
                  <div className='iconlable'>
                     <Typography  variant='h6'> Portfolio </Typography>
                  </div>
               </div>

               <div className='iconPage' onClick={() => navigate('/contact')} >
                  <div className={location.pathname === '/contact' ? 'iconIcon pageActive' : 'iconIcon' }>
                      <FaEnvelopeOpen />
                  </div>
                  <div className='iconlable'>
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