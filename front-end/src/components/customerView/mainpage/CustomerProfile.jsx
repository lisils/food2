import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
const axios = require('axios').default;

class CustomerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      information : undefined,
      userName: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    }
    this.getInformation = this.getInformation.bind(this);
  }

  componentDidMount() {
    this.getInformation();
  }

  getInformation() {
    let customerId = this.props.currentUser.id;
    axios.get("/api/customer/" + customerId).then(
        response => {
          this.setState({
            information : response.data,
            userName : response.data.userName,
            phoneNumber : response.data.phoneNumber,
            address : response.data.address,
            city : response.data.city,
            state : response.data.state,
            zip : response.data.zip,
          });
        }
    ).catch(err => console.log(err));
  }


  render() {
    return this.state.information ? (
        <Grid container justify="center">
          <Grid item xs={5}>
            <div className="container">
              <PermContactCalendarIcon className="icon"/>
              <Typography component="h1" variant="h5">
                My Profile
              </Typography>
              <Typography variant="body1" color="error">
                {this.state.alert}
              </Typography>
              <form>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Username"
                    type="text"
                    value={this.state.userName}
                    autoFocus
                    disabled
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Phone Number"
                    type="text"
                    value={this.state.phoneNumber}
                    disabled
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Address"
                    type="text"
                    value={this.state.address}
                    disabled
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="City"
                    type="text"
                    value={this.state.city}
                    disabled
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="State"
                    type="text"
                    value={this.state.state}
                    disabled
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Zip Code"
                    type="text"
                    value={this.state.zip}
                    disabled
                />

              </form>
            </div>
          </Grid>
        </Grid>
    ) : <div />;
  }
}

export default CustomerProfile;