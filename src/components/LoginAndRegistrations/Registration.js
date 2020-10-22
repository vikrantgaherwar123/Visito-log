import React, { useState,useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {
    Link,
    useHistory
  } from "react-router-dom";
import Auth from '../../Auth';

// import {Link, Switch, Route, Redirect } from 'react-router-dom';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

  
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
    //   backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    color: {
        backgroundColor: 'darkgray'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    signin: {
        color: 'gray',
        fontFamily: 'system-ui'
    }
  }));

const Registration =() => {
    let history = useHistory();

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [mobnumber, setMobnumber] = useState('')
    const [organization, setOrganization] = useState('')
    const [orgmail, setOrgmail] = useState('')
    const [signuppassword, setSignuppassword] = useState('')
    const [openReg, setOpenReg] = useState(false);
    const [regerror, setRegError] = useState('');

    const classes = useStyles();


    const handleFirstnameChange = (event) => {
        setFirstname(event.target.value)
    }
    const handleLastnameChange = (event) => {
        setLastname(event.target.value)
    }

    const handleMobnumberChange = (event) => {
        setMobnumber(event.target.value);
    }
    const handleOrganizationChange = (event) => {
        setOrganization(event.target.value)
    }
    const handleOrgmailChange = (event) => {
        setOrgmail(event.target.value)
    }
    const handleSignupPasswordChange = (event) => {
        setSignuppassword(event.target.value)
    }
    

    const handleRegValidation = () =>{
        if(!firstname){
            setOpenReg(true);
            setRegError('Firstname Is Required..!!!');
            return false;
        }
        if(!lastname){
            setOpenReg(true);
            setRegError('Lastname Is Required..!!!');
            return false;
        }
        if(!mobnumber){
            setOpenReg(true);
            setRegError('Mobile Number Is Required..!!!');
            return false;
        }else if(mobnumber.length > 10 || mobnumber.length < 10){
            setOpenReg(true);
            setRegError('Please enter a 10 digit mobile number..!!!');
            return false;
        }
        if(!organization){
            setOpenReg(true);
            setRegError('Organization Is Required..!!!');
            return false;
        }
        if(!orgmail){
            setOpenReg(true);
            setRegError('Organization Mail Is Required..!!!');
            return false;
        }else if(orgmail){
            let lastAtPos = orgmail.lastIndexOf('@');
            let lastDotPos = orgmail.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && orgmail.indexOf('@@') == -1 && lastDotPos > 2 && (orgmail.length - lastDotPos) > 2)) {
                setOpenReg(true);
                setRegError('Invalid Organization Mail..!!!');
                return false;
            }
        }
        if(!signuppassword){
            setOpenReg(true);
            setRegError('Signup Password Is Required..!!!');
            return false;
        }
        setOpenReg(false);
        return true;
    }

    const register = () => {
        if(handleRegValidation()){

        }
    }

    const logout = () => {
        Auth.signout();
    }
    
    return (
        <div>
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid  item xs={12} sm={10} md={7} component={Paper} elevation={6} square>
                <div style={{margin:"20em"}} className={classes.paper}>
                    {/* <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar> */}
                    <Typography className={classes.signin} component="h1" variant="h5">
                            Sign Up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="First Name"
                            name="firstname"
                            autoComplete="firstname"
                            autoFocus
                            data-testid='firstname'
                            onChange={handleFirstnameChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="lastname"
                            label="Last Name"
                            type="text"
                            autoComplete="lastname"
                            data-testid='lastname'
                            onChange={handleLastnameChange}
                        />
                       <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="mobnumber"
                            label="Mobile Number"
                            type="number"
                            pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                            autoComplete="mobnumber"
                            data-testid='mobnumber'
                            onChange={handleMobnumberChange}
                        />
                       <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="organization"
                            label="Organization"
                            type="text"
                            autoComplete="organization"
                            data-testid='organization'
                            onChange={handleOrganizationChange}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Organization Email"
                            name="orgemail"
                            autoComplete="orgemail"
                            data-testid='orgemail'
                            onChange={handleOrgmailChange}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="signuppassword"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            data-testid='signuppassword'
                            onChange={handleSignupPasswordChange}
                        />
                       
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit,'submit-register-btn'}
                            data-testid='register_btn'
                            onClick={register}
                        >
                            Register
                        </Button>
                        <Grid style={{justifyContent: "center"}} container>
                            <Grid item>
                                <Link data-testid='signInLink' to="/" variant="body2">
                                    {"Already a Member? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Snackbar open={openReg} autoHideDuration={6000} onClose={() => setOpenReg(false)}>
                                <Alert data-testid='rgerrMsg' onClose={() => setOpenReg(false)} severity="error">
                                    {regerror}
                                </Alert>
                        </Snackbar>
                        {/* <Box mt={5}>
                            <Copyright />
                        </Box> */}
                    </form>
                </div>
            </Grid>
            <Grid item xs={false} sm={2} md={5} className={classes.color} />
        </Grid>
        </div>   
    )
}

export default Registration;