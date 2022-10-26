import React, { useEffect, useState } from 'react'
import { Avatar, Box, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material'
import myImage2 from '../Images/my image 02.png'

import {LinearWithLabel} from './ProgressWithLabel'
import Experience from './Experience';

import { FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiRedux, SiMaterialui } from "react-icons/si";
import { FaDownload } from "react-icons/fa";

import '../Styles/index.css'




export default function About() {


  const [mySkills, setMySkills] = useState([
    {name: 'HTML', value: 0},
    {name: 'CSS', value: 0},
    {name: 'Java Script', value: 0},
    {name: 'React', value: 0},
  ])

  const setSkills = () =>{

    const skills = [
      {name: 'HTML', value: 90},
      {name: 'CSS', value: 75},
      {name: 'Java Script', value: 80},
      {name: 'React', value: 77},
    ]
    setMySkills(skills)
  }


  useEffect( () =>{
    setSkills()
  },[])



  return (

    <Container sx={{my:{xs:'12%', lg:'70px'}}}>
      <Stack textTransform='uppercase' mb={6} >

        <Typography fontSize={{xs:'30px', lg:'100px'}} fontWeight="800"  letterSpacing={15}
         position='absolute' top={40} left={{xs:5, lg:'50%'}} sx={{transform:'translateX(-50%)'}}
         color={(theme) => theme.palette.mode === 'dark' ? '#ffffff12' : '#1e253012' } >
          Resume
        </Typography>

        <Typography fontWeight="900"
         fontSize={{xs:'25px', lg:'60px'}}  textAlign={{xs:'left', lg:'center'}}  >
          About
          <span  style={{color:'var(--mainPraimary)'}}>  Me</span>
        </Typography>
      </Stack>


      <Grid container spacing={3} >
        <Grid item xs={12} lg={5}  color='text.secondary' >
          <Box display='flex' justifyContent='center' mb={{xs:6, lg:0}} >
            <Avatar
              alt="Mustafa Abutabl Image"
              src={myImage2}
              sx={{ width: '300px', height: '300px', border:'4px solid #252525', objectFit: 'top',  }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} lg={7}   >
          <Box display='flex' flexDirection='column' justifyContent='center' width='100%' >

            <Typography variant='h5' textTransform='uppercase' > personal infos </Typography>

            <Box display='flex' flexWrap='wrap' justifyContent='space-between' mt={3} color='text.secondary' >
              <Stack flex='0 0 50%' mb={1}>
                <Typography variant='body1' component='span' > Frist Name:
                  <span style={{color:'var(--mainPraimary)', fontWeight:900}} > Mustafa</span>
                </Typography>
              </Stack>

              <Stack flex='0 0 50%' mb={1}>
                <Typography variant='body1' flex='0 0 50%'>
                  <span> Last Name: </span>
                  <span style={{color:'var(--mainPraimary)', fontWeight:900}} > Abutabl</span>
                </Typography>
              </Stack>

              <Stack flex='0 0 50%' mb={1}>
                <Typography variant='body1' display='block' > Birthdate:
                  <span style={{color:'var(--mainPraimary)', fontWeight:900}} > 19/10/1989</span>
                </Typography>
              </Stack>

              <Stack flex='0 0 50%' mb={1}>
                <Typography variant='body1' flex='0 0 50%' > Nationality:
                  <span style={{color:'var(--mainPraimary)', fontWeight:900}} > Egyption</span>
                </Typography>
              </Stack>

              <Stack flex={{xs:'0 0 100%', md:'0 0 50%'}} mb={1}>
                <Typography variant='body1'  > Military Service:
                  <span style={{color:'var(--mainPraimary)', fontWeight:900}} > Finshed</span>
                </Typography>
              </Stack>

              <Stack flex={{xs:'0 0 100%', md:'0 0 50%'}} mb={1}>
                <Typography variant='body1' > Langages:
                  <span style={{color:'var(--mainPraimary)', fontWeight:900}} > Arabic, English</span>
                </Typography>
              </Stack>

              <Stack flex={{xs:'0 0 100%', md:'0 0 50%'}} mb={1}>
                <Typography variant='body1' > Email:
                  <span style={{color:'var(--mainPraimary)', fontWeight:500}} > eng.mustafa@hotmail.com</span>
                </Typography>
              </Stack>

              <Stack flex={{xs:'0 0 100%', md:'0 0 50%'}} mb={1}>
                <Typography variant='body1' > Phone:
                  <span style={{color:'var(--mainPraimary)', fontWeight:500}} > +20 111 970 6667</span>
                </Typography>
              </Stack>

              <Stack flex={{xs:'0 0 100%', md:'0 0 50%'}} mb={1}>
                <Typography variant='body1' > Freelance:
                  <span style={{color:'#01ef92', fontWeight:900}} > Available</span>
                </Typography>
              </Stack>
            </Box>
          </Box>



          <Link href="/files/MUSTAFA-Abutabl-resume.pdf" target="_blank" download color='#ffffff' underline='none'>
            <Box
              className='project-btn'
              component='button'
              mt={5}
              color='text.primary'
            >
              <Box className='project-btn-icon' ><FaDownload /> </Box>
              <Box className='project-btn-text' > Download CV </Box>
            </Box>
          </Link>

        </Grid>

      </Grid>



      <Divider  sx={{bgcolor:'gray', width:'50%', mx:'auto', my:4}} />

      <Box mt={6}>
        <Typography variant='h5' textTransform='uppercase' > Skills </Typography>

        <Grid container spacing={3} my={1} >

          {mySkills.map((e, i) =>
            <Grid item xs={12} lg={6}  key={i} color='text.secondary' >
              <Stack  mr={{xs:0, lg:6}} >
                <Typography variant='h5' mb={1} > {e.name} </Typography>
                <LinearWithLabel value={e.value}   />
              </Stack>
            </Grid>
          )}

        </Grid>
      </Box>




      <Box my={6} >
        <Typography variant='h5' textTransform='uppercase'  mb={2} > Other Skills </Typography>

        <Stack direction='row' gap={3}   flexWrap='wrap' justifyContent={{xs:'center', lg:'left'}}
         textAlign='center'   >

          <Box fontSize={60} color='#723DBE' borderRadius='10px'>
            <FaBootstrap/>
            <Typography variant='body1' color='praimary' mb={2} > Bootstrap </Typography>
          </Box>
          <Box fontSize={60} color='#007FFF' borderRadius='10px' >
            <SiMaterialui/>
            <Typography variant='body1' color='praimary' mb={2} > Material Ui </Typography>
          </Box>
          <Box fontSize={60} color='praimary' borderRadius='10px' >
            <FaGithub/>
            <Typography variant='body1' color='praimary' mb={2} > Github </Typography>
          </Box>
          <Box fontSize={60} color='#DE4C36' borderRadius='10px' >
            <FaGitAlt/>
            <Typography variant='body1' color='praimary' mb={2} > Git </Typography>
          </Box>
          <Box fontSize={60} color='#764ABC' borderRadius='10px' >
            <SiRedux/>
            <Typography variant='body1' color='praimary' mb={2} > Redux </Typography>
          </Box>
        </Stack>
      </Box>


      <Divider  sx={{bgcolor:'Divider', width:'50%', mx:'auto', my:4}} />

      {/* Experience component */}
      <Experience />

    </Container>
  )
}
