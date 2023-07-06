import * as React from 'react';
import  { Fragment } from "react";
import Alert from '@mui/material/Alert';
import {
  Paper,
  Box,
  Grid,
  TextField,
  Checkbox,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import queryString from "query-string";

const Form = ( {channelid} ) => {

  const [showForm, setShowForm] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const [gender, setGender] = useState('no');

  const [file, setFile] = useState();

  function handlefileChange(event) {
    setFile(event.target.files[0]);
  }
  const handleSubmit= () => {
    const url = 'slack';
    
      
    let fd = new FormData();
    let myFile = document.getElementById('upload-photo').files[0];
    let fullname = document.getElementById('fullname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let phonenumber = document.getElementById('phonenumber').value;
    let initial_comment = "Full name : "+ fullname+" "+lastname+" " + " Email : "+ email+  " Phone number : " + phonenumber +" Work Authorization : "+gender;
    
    fd.append('file', myFile);
    fd.append('initial_comment', initial_comment);
    
    fd.append('channels', channelid);
    fetch(url, {
      method : 'POST',
      body: fd
    })
    .then((response) => {
      if(!response.ok) throw new Error(response.status);
      else return response.json();
    })
.then((data) => { 
  setShowForm(true);
  document.getElementById('fullname').value = '';
  document.getElementById('lastname').value='';
  document.getElementById('email').value = '';
  document.getElementById('phonenumber').value = '';
  setGender('');
})
    .catch( (error) => {
      setShowForm(false);
      setShowErr(true);
    })
    };

  const handleChange = (event) => {
    setGender(event.target.value)
  }


  return (
    <Fragment>
      <Paper>
        <Box px={3} py={2}>
         
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="fullname"
                name="fullname"
                label="First Name"
                fullWidth
                margin="dense"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="lastname"
                name="lastname"
                label="Last Name"
                fullWidth
                margin="dense"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="email"
                name="email"
                type="email"
                label="Email Address"
                fullWidth
                margin="dense"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phonenumber"
                name="phonenumber"
                label="Phone Number"
                fullWidth
                margin="dense"
              />
            </Grid>
            <br />

            <Grid item xs={12} sm={12}>
            </Grid>

            <Grid item xs={6} sm={6}>
            <p> <h4>Upload Resume  </h4> </p>
        <input type="file" class="form-control" id="upload-photo"
                  name="upload-photo" onChange={handlefileChange} />
              </Grid>
              <Grid item xs={6} sm={6}>
                 </Grid>

            <Grid item xs={6} sm={6}>
            <form>
            <p> <h4>Work Authorization : </h4> </p>
      <div>
        <input
          type="radio"
          value="yes"
          checked={gender === 'yes'}
          onChange={handleChange}
        /> Yes,I am currently eligible to work (Work permit/visa/citizenship) in the country to which I am applying.
      </div>
      <div>
        <input
          type="radio"
          value="no"
          checked={gender === 'no'}
          onChange={handleChange}
        /> No,I need a visa sponsorship (H1B / Other work permit) in the country to which I am applying.
      </div>
    </form>
            </Grid>
           
            <Grid item xs={12} sm={12}>
              <Checkbox defaultChecked size="small" /> Accept terms and
              conditions
            </Grid>
           
          </Grid>{" "}
          <br />
          <Box mt={3}>
            <Button
              id='btnSubmit'
              variant="contained"
              color="primary"
            >
              Submit
            </Button>{" "}
            <br />
            <br />
            {showForm && (
         <Alert severity="success">Resume Posted Successfully ! </Alert>
            )}

{showErr && (
         <Alert severity="error">Please try Again ! </Alert>
            )}
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
};
export default Form;