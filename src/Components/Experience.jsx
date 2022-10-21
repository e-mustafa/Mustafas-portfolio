import React, { Fragment } from 'react'
import { Box, Grid, Typography } from '@mui/material'

import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent} from '@mui/lab';


import { GiOpenBook } from "react-icons/gi";
import {  FaRegHospital, FaToolbox, FaLaptopCode } from "react-icons/fa";
import '../Styles/Experience.css'


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
      <Fragment>

                 <Typography variant='h5' textTransform='uppercase'  mb={2} > Experience </Typography>


      <Timeline position='right' color='text.white' sx={{px:0}}  >
        <Grid container >

         <Grid item xs={12} lg={6} order={1} >

            <TimelineItem sx={{'&::before': {content:'none'}}}>
               <TimelineSeparator>
                  <TimelineDot color="primary"> <FaLaptopCode /> </TimelineDot>
                  <TimelineConnector />
               </TimelineSeparator>

               <TimelineContent sx={{ py: '12px', px: 2, }}>
                  <Typography variant="body1" component="span" bgcolor='divider' py={0.3} px={2} borderRadius='20px' >
                     2022
                  </Typography>
                  <Typography variant="h6" > Course </Typography>
                  <Typography variant="h6" > Front-end Developer </Typography>
               </TimelineContent>
            </TimelineItem>
         </Grid>

         <Grid item xs={12} lg={6} order={{xs:2, lg:3}}  >
            <TimelineItem  sx={{'&::before': {content:'none'}}}>
               <TimelineSeparator>
                  <TimelineDot color="primary"> <FaToolbox /> </TimelineDot>
                  <TimelineConnector />
               </TimelineSeparator>

               <TimelineContent sx={{ py: '12px', px: 2, }}>
                  <Typography variant="body1" component="span" bgcolor='divider' py={0.3} px={2} borderRadius='20px' >
                     2014 - 2018
                  </Typography>
                  <Typography variant="h6" > Employee </Typography>
                  <Typography variant="h6" > Biomedical Engineer </Typography>
               </TimelineContent>
            </TimelineItem>
         </Grid>

         <Grid item xs={12} lg={6} order={{xs:3, lg:2}} >
            <TimelineItem  sx={{'&::before': {content:'none'}}}>
               <TimelineSeparator>
                  <TimelineDot color="primary"> <FaRegHospital /> </TimelineDot>
                  <TimelineConnector />
               </TimelineSeparator>

               <TimelineContent sx={{ py: '12px', px: 2, }}>
                  <Typography variant="body1" component="span" bgcolor='divider' py={0.3} px={2} borderRadius='20px' >
                     2012 - 2013
                  </Typography>
                  <Typography variant="h6" > Trainee & Volunteer </Typography>
                  <Typography variant="h6" > Biomedical Engineer </Typography>
               </TimelineContent>
            </TimelineItem>
         </Grid>

         <Grid item xs={12} lg={6} order={4} >
            <TimelineItem  sx={{'&::before': {content:'none'}}}>
               <TimelineSeparator>
                  <TimelineDot color="primary"> <GiOpenBook /> </TimelineDot>
                  <TimelineConnector />
               </TimelineSeparator>

               <TimelineContent sx={{ py: '12px', px: 2, }}>
                  <Typography variant="body1" component="span" bgcolor='divider' py={0.3} px={2} borderRadius='20px' >
                     2012
                  </Typography>
                  <Typography variant="h6" > Bachelor Degree </Typography>
                  <Typography variant="h6" > Medical Equipment Engineering </Typography>
               </TimelineContent>
            </TimelineItem>
         </Grid>

      </Grid>
      </Timeline>
      </Fragment>
   );
}


