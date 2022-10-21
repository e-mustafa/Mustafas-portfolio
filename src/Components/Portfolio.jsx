import React, { useEffect, useState } from 'react'
import { Box, Card, CardMedia, Container, Grid, Stack, Typography, Link } from '@mui/material'

import '../Styles/Portfolio.css'
import image1 from '../Images/Portfolio-img.png'

import axios from 'axios'

export default function Projects() {
  // https://api.github.com/users/e-mustafa/repos

  const [repos, setRepos] = useState([])

  const getRepos = async ()=>{
    const res = await axios.get(`https://api.github.com/users/e-mustafa/repos`)
    .catch((error) =>{
      console.log(error);
    })
    setRepos(res.data)
    console.log(res);
  }


  useEffect(()=>{
    getRepos()
  },[])



  return (


    <div>
    <Container sx={{my:{xs:'12%', lg:'5%'}}}>
      <Stack textTransform='uppercase' mb={6} >

        <Typography fontSize={{xs:'30px', lg:'100px'}} fontWeight="800" color='#ffffff12' letterSpacing={15}
         position='absolute' top={40} left={{xs:5, lg:'50%'}} sx={{transform:'translateX(-50%)'}}  >
          Works
        </Typography>

        <Typography fontWeight="900"
         fontSize={{xs:'25px', lg:'60px'}}  textAlign={{xs:'left', lg:'center'}}  >
          My
          <span style={{color:'var(--mainPraimary)'}} > Portfolio</span>
        </Typography>
      </Stack>


      <Stack direction='row' gap={4} justifyContent='center' mt={10} mb={4} >
        <Typography  className='project-type' > All </Typography>
        <Typography  className='project-type' > CSS </Typography>
        <Typography  className='project-type' > JS </Typography>
        <Typography  className='project-type' > React </Typography>
      </Stack>





      <Grid container spacing={3} >
        {repos && repos.map(e =>
          <Grid item xs={12} lg={4}  key={e.id}>
            <Card className='project-Parent'  >
              <Link href={e.homepage}>

                {/* when hover over card show next box */}
                <CardMedia
                  component="img" width='100%' height='100%'
                  image={image1} alt={e.name}
                />

                <Box className='project-Data' p={2} height='100%' width='100%'
                  justifyContent='center' alignItems='center'
                  sx={{textShadow:'1px 1px #fff'}}>

                  <Typography variant="h6" > {e.name} </Typography>
                  <Typography variant="h6" > {e.description} </Typography>
                </Box>
              </Link>
            </Card>
          </Grid>
        )}

      </Grid>



    </Container>
  </div>
  )
}
