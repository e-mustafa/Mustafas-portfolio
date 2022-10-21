import React from 'react'
import { Container, Grid, Link, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';

import { FaMap, FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaTelegramPlane, FaGithub } from "react-icons/fa";
import '../Styles/Contact.css'
import ContactForm from './ContactForm';






const Contact = () => {


  return (
    <Container sx={{my:{xs:'12%', lg:'5%'}}}  >
      <Stack textTransform='uppercase' mb={6} >
        <Typography fontSize={{xs:'30px', lg:'100px'}} fontWeight="800" color='#ffffff12' letterSpacing={15}
          position='absolute' top={40} left={{xs:5, lg:'50%'}} sx={{transform:'translateX(-50%)'}}  >
          Contact
        </Typography>
        <Typography fontWeight="900"
        fontSize={{xs:'25px', lg:'60px'}}  textAlign={{xs:'left', lg:'center'}}  >
          get in  <span style={{color:'var(--mainPraimary)'}} >touch</span>
        </Typography>
      </Stack>


        <Box  >
          <Typography  fontSize={{xs:'25px', lg:'25px'}}  textAlign={{xs:'center', lg:'left'}} mb={3} >
            DON'T BE SHY !
          </Typography>
        </Box>


      <Grid  container>
        <Grid item  lg={4}  >
          <Box  textTransform='capitalize'>
            <Typography fontWeight="700" fontSize='15px'  textAlign='left' mb={3}  >
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas
              or opportunities to be part of your visions.
            </Typography>

            <Stack display='flex' flexDirection='row' alignItems='center' gap={2}  mb={3} >
              <Stack fontSize={40} color='text.disabled' > <FaMap /> </Stack>

              <Stack fontSize={40} textAlign='left' >
                <Typography> Address point </Typography>
                <Typography> Cairo - Egypt </Typography>
              </Stack>
            </Stack>

            <Stack display='flex' flexDirection='row' alignItems='center' gap={2}  mb={3} >
              <Stack fontSize={30} color='text.disabled' > <FaEnvelopeOpen /> </Stack>

              <Stack fontSize={30} textAlign='left' >
                <Typography> Mail Me </Typography>

                <Link href='mailto:eng.mustafax@gmail.com' underline="none"  color='text.praimary' fontSize={15} >
                  Eng.mustafa@hotmail.com
                </Link>
              </Stack>
            </Stack>

            <Stack display='flex' flexDirection='row' alignItems='center' gap={2}  mb={3} >
              <Stack fontSize={40} color='text.disabled' > <FaPhoneAlt /> </Stack>

              <Stack textAlign='left' >
                <Typography > Call Me </Typography>
                <Link href='tel:+201119706667' underline="none"  color='text.secndary'>
                +20 111 970 6667
                </Link>
                <Link href='tel:+201091278812' underline="none" color='text.praimary'>
                  +20 109 127 8812
                </Link>
              </Stack>
            </Stack>

            <Stack display='flex' flexDirection='row' alignItems='center' gap={2}  mb={3}
              justifyContent={{xs:'center', lg:'left'}} >

              <Link href='https://web.facebook.com/my.6000' >
                <div className='social-icons' > <FaFacebookF /> </div>
              </Link>

              <Link href='https://www.linkedin.com/in/mustafa-ahmed-8247b45a' >
                <div className='social-icons' > <FaLinkedinIn /> </div>
              </Link>

              <Link href='https://wa.me/+201119706667' >
                <div className='social-icons' > <FaWhatsapp /> </div>
              </Link>

              <Link href='https://t.me/eng_noo' >
                <div className='social-icons' > <FaTelegramPlane /></div>
              </Link>

              <Link href='https://github.com/e-mustafa' >
                <div className='social-icons' > <FaGithub /></div>
              </Link>

            </Stack>

          </Box>
        </Grid>

        <Grid item lg={7}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  )
}
export default Contact ;