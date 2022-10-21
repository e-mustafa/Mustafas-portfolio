import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material'
import React from 'react'

// import { SlBookOpen } from "react-icons/si";

import { GiOpenBook } from "react-icons/gi";



export const StepIconEducation = () => {
   return (
      <Box fontSize={30} bgcolor='#018dff' borderRadius='50%' height='45px' width='45px'
       display='flex' justifyContent='center' alignItems='center' >
         <GiOpenBook/>
      </Box>
   )
}


export default function Experience() {
   return (
      <Box  color='white' ml={2} flexWrap='wrap' >
      <Stepper    alternativeLabel={true} orientation='vertical' >

         <Step  >
            <StepLabel StepIconComponent={StepIconEducation}  sx={{ml:-1}}>
               <Typography bgcolor='#2b2a2a' borderRadius='30px' color='white' px={2} display='inline-block' mb={1} >
                  2007 - 2012
               </Typography>
            </StepLabel>

            <StepContent  >
               <Typography>Bachelor Degree </Typography>
               <Typography>Medical Equipment Engineering </Typography>
            </StepContent>
         </Step>


         <Step active >
            <StepLabel StepIconComponent={StepIconEducation}  sx={{ml:-1}}>
               <Typography bgcolor='#2b2a2a' borderRadius='30px' color='white' px={2} display='inline-block' mb={1} >
                  2012 - 2013
               </Typography>
            </StepLabel>

            <StepContent  >
               <Typography>Tranee & volanteer </Typography>
               <Typography>International Medical Center, jeddah </Typography>
            </StepContent>
         </Step>



         <Step active >
            <StepLabel StepIconComponent={StepIconEducation}  sx={{ml:-1}}>
               <Typography bgcolor='#2b2a2a' borderRadius='30px' color='white' px={2} display='inline-block' mb={1} >
                  2013 - 2018
               </Typography>
            </StepLabel>

            <StepContent  >
               <Typography> Biomedical Engineer </Typography>
               <Typography> International Medical Center, jeddah </Typography>
            </StepContent>
         </Step>


         <Step active >
            <StepLabel StepIconComponent={StepIconEducation}  sx={{ml:-1}}>
               <Typography bgcolor='#2b2a2a' borderRadius='30px' color='white' px={2} display='inline-block' mb={1} >
                  2022
               </Typography>
            </StepLabel>

            <StepContent  >
               <Typography> </Typography>
               <Typography> Cours </Typography>
               <Typography> Front-end developer </Typography>

            </StepContent>
         </Step>


         <Step  sx={{display:'none'}} >
            <StepLabel StepIconComponent={StepIconEducation}  sx={{ml:-1}}>
               <Typography bgcolor='#2b2a2a' borderRadius='30px' color='white' px={2} display='inline-block' >
                  2013 - 2018
               </Typography>
            </StepLabel>

            <StepContent  >
               <Typography> </Typography>
               <Typography> Cours Front-end developer </Typography>

            </StepContent>
         </Step>
      </Stepper>

    </Box>
   )
}


