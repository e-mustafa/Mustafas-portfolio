import { Avatar, Button, Card, CardMedia, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';

import myImage from '../Images/my image 01.png'
import myImage2 from '../Images/my image 02.png'




export const Home = () => {
   const navigate = useNavigate()





   return (
      <Fragment>
         <Grid sx={{ flexGrow: 1 }} container spacing={2}  height={{sx:'auto', lg:'100vh'}} position='relative' >
            <Grid item lg={3} bgcolor='#018dff' > </Grid>

            <Grid item lg={9} pr={4}
             display='flex' flexDirection='column' justifyContent='center'  flexGrow={1} >

            </Grid>

         </Grid>

         <Container maxWidth="xs"  >
            <Box display='flex' alignItems='center' justifyContent='center' position='absolute' top={0} left={0}
             height='100%' >

         <Grid  container  height={{xs:'auto', lg:'100%'}}
          display='flex' alignItems='center' justifyContent={{xs:'center', lg:'left'}}  p={{xs:2, lg:6}}>

            <Grid item  lg={4}  padding={0} height='100%' >
               <Box display={{xs:'none', lg:'flex'}} height='100%' >
               <Card  sx={{ borderRadius:'30px', boxShadow:2, bgcolor:'#00000087'}}   >
                  <CardMedia
                     component="img"
                     image={myImage}
                     height='100%'
                     width='100%'
                     />
               </Card>
               </Box>

               <Box display={{xs:'flex', lg:'none'}} >
                  <Avatar
                     alt="Mustafa Abutabl Image"
                     src={myImage2}
                     sx={{ width: '100%', height: '300px', border:'4px solid #252525', objectFit: 'top',
                      bgcolor:'black'  }}
                  />
               </Box>
            </Grid>

            <Grid item lg={6} mt={{xs:4, lg:0}} >

               <Box  >
                  <Typography  fontSize={{xs:'25px', lg:'50px'}} fontWeight="bold" color='text.disabled' textAlign='center' >
                     MUSTAFA Ahmed
                  </Typography>

                  <Typography  fontSize={{xs:'21px', lg:'50px'}} fontWeight="bold"  textAlign='center'
                   my={1} >
                     Front-end developer
                  </Typography>

                  <Typography  fontSize={{xs:'15px', lg:'20px'}}  color='text.secondary' textAlign='center' px={{xs:2, lg:10}} >
                   I'm a Egyption based front‑end developer focused on crafting clean & user‑friendly
                   experiences, I am passionate about building excellent software that improves the lives of those
                   around me.
                  </Typography>

                  <Box textAlign='center' mt={5}>
                     <Button variant="contained"   size="large" sx={{borderRadius:'50px'}}
                      onClick={() => navigate('/about')} >
                        More about me
                     </Button>
                  </Box>
               </Box>

            </Grid>

            {/* <Grid item xs={0} lg={2} bgcolor={(theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#111'}
              flexDirection='column' justifyContent='center'   >

               <Stack display={{xs:'none', lg:'flex'}} >
                  <NavigationLg />
               </Stack>

               <Stack display={{xs:'flex', lg:'none'}} >
                  <NavbarBottom />
               </Stack>
            </Grid> */}
         </Grid>
         </Box>
            </Container>









         {/* <Grid sx={{ flexGrow: 1 }} container spacing={2} height='100vh' position='absolute' top={0} left={0} >
            <Grid item lg={3} bgcolor='#018dff'>
               <Paper
                  sx={{
                     height: 140,
                     width: 100,
                     backgroundColor: (theme) =>
                     theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}
               />
                  بسم الله

            </Grid>
            <Grid item lg={9} bgcolor={(theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#111'}>
               <Paper
                  sx={{
                     height: 140,
                     width: 100,
                     backgroundColor: (theme) =>
                     theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}
               />
                  بسم الله
            </Grid>
         </Grid> */}
      </Fragment>
   )
}

export default Home ;