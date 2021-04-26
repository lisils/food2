import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { Link } from "react-router-dom";
import './Login.css';
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import {Tab} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import AdbIcon from "@material-ui/icons/Adb";

const axios = require('axios').default;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      userType: "customer",
      loginFailed: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChange(content) {
    this.setState(content);
  }

  loginUser(event) {
    event.preventDefault();
    axios.post("/api/" +this.state.userType + "/login", {userName: this.state.userName, password: this.state.password}).then(
      response => {
        this.props.changeUser(response.data, "login");
      }
    ).catch(err => {
      console.log(err.response.data);
      this.setState({userName: "", password: "", loginFailed: err.response.data});
    });
  }

  render() {
    return (

      <Grid container justify={"center"}
      //       style={{
      //   minHeight:"100%",
      //   backgroundImage: `url("https://files.pitchbook.com/website/files/jpg/food_delivery_800.jpg")`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundAttachment: "fixed",
      //   backgroundPosition: "center",
      //   backgroundSize: "cover"
      // }}
      >
        {/*<Grid item xs={7}>*/}
        {/*  <img className="image" alt="foodImage" src='https://files.pitchbook.com/website/files/jpg/food_delivery_800.jpg' />*/}
        {/*</Grid>*/}
        <Grid item  xs={"auto"} >
          <div className="container"  >
            <Typography component="h1" variant="h5">
              Sign in with your account
            </Typography>
            <Typography variant="body1" color="error">
              {this.state.loginFailed}
            </Typography>
            <form onSubmit={this.loginUser} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="UserName"
                type="text"
                value={this.state.userName}
                autoFocus
                onChange={event => this.handleChange({userName: event.target.value})}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                value={this.state.password}
                onChange={event => this.handleChange({password: event.target.value})}
              />
              <FormControl component="fieldset">
                <FormLabel component="legend">Login as</FormLabel>
                <RadioGroup row aria-label="UserType" name="userType" value={this.state.userType} onChange={event => this.handleChange({userType: event.target.value})}>
                  <FormControlLabel value="customer" control={<Radio />} label="Customer" color="primary" />
                  <FormControlLabel value="driver" control={<Radio />} label="Driver" />
                  <FormControlLabel value="restaurant" control={<Radio />} label="Restaurant" />
                </RadioGroup>
              </FormControl>
              <br/>
              <br/>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
              >
                Sign In
              </Button>
              <br/>
              <br/>
              <Link to={"/home"} className={"link"}>
                <Tab label="Home" icon={<HomeIcon/>}/>
              </Link>

              <Link to={"/register"} className="link">
                <Tab label="Register" icon={<AdbIcon/>}/>
              </Link>
              <br/>
              <h4>Disclaimer: The Site cannot and does not contain any advice. The information is provided for general
              informational and educational purposes only and is not a substitute for professional advice.</h4>

            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Login;