import React, { Fragment } from 'react'
import { Box, Button, Grid, TextField } from '@mui/material'
// import { Copyright } from '@mui/icons-material';




export default function ContactForm() {

   const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log(FormData);
      console.log({
         email: data.get('email'),
         password: data.get('password'),
      });
   };

   //  const TextFieldWrapper = styled(TextField)`
   //   fieldset {
   //     border-radius: 50px;
   //   }
   // `;

   return (
      <Fragment>
      {/* <Container component="main" maxWidth="xs"> */}
      {/* <CssBaseline /> */}
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
         }}
      >
         <Box component="form" noValidate onSubmit={handleSubmit}  ml={{lg:8}} mt={{xs:8, lg:0}} >
            <Grid container spacing={2}>
               <Grid item xs={12} sm={6}>
                  <TextField
                     autoComplete="given-name"
                     name="firstName"
                     fullWidth
                     id="firstName"
                     label="First Name"
                     // inputProps={{className:'contact-input'}}
                     // InputLabelProps={{className:'contact-label'}}
                  />
               </Grid>
               <Grid item xs={12} sm={6}>
                  <TextField
                     fullWidth
                     id="lastName"
                     label="Last Name"
                     name="lastName"
                     autoComplete="family-name"
                     // inputProps={{className:'contact-input'}}
                     // InputLabelProps={{className:'contact-label'}}
                  />
               </Grid>
               <Grid item xs={12} >
                     <TextField
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        // inputProps={{className:'contact-input'}}
                        // InputLabelProps={{className:'contact-label'}}
                     />
               </Grid>
               <Grid item xs={12}>
                  <TextField  className='contact-input'
                     fullWidth
                     name="message"
                     label="write message"
                     type="text"
                     id="message"
                     multiline
                     rows={4}
                     // minRows={3}
                     // inputProps={{className:'contact-input'}}
                     // InputLabelProps={{className:'contact-label'}}
                  />
               </Grid>
            </Grid>

            <Button
             type="submit"
             fullWidth
             variant="contained"
             size='large'
             sx={{ mt: 3, mb: 2 }}
            >
               Send
            </Button>

         </Box>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}
      {/* </Container> */}
      </Fragment>
   )
}
