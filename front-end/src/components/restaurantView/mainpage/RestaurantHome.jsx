import React from 'react';
import { Typography, Divider } from '@material-ui/core';
const axios = require('axios').default;

class RestaurantHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant : undefined
    }
    this.getRestaurant = this.getRestaurant.bind(this);
  }

  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant() {
    let restaurantId = this.props.currentUser.id;
    axios.get("/api/restaurant/" + restaurantId).then(
      response => {
        this.setState({restaurant : response.data});
      }
    ).catch(err => console.log(err));
  }

  render() {
    return this.state.restaurant ? (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Typography paragraph variant="h2">Welcome to the <i><b>NEUEat</b></i> !</Typography>
        <Typography paragraph variant="h5">Get set up for success </Typography>
        <Typography paragraph>
          Support starts on day one, with hands-on help to get your restaurant up and running in the Restaurant Information Page.
          </Typography>
        <Typography paragraph>From creating your menu to adjusting your hours, here's what to expect when getting set up, please click the links of Menu.</Typography>
        {/*<Typography paragraph>To be noticed, you can always update them</Typography>*/}
        <Typography paragraph>Thanks for being our partners!</Typography>
        <Divider />
        <br />
        {/*<div>Restaurant Information status :*/}
        {/*{this.state.restaurant.information !== null ? <Typography color="primary">verified</Typography> : <Typography color="error">empty</Typography>}*/}
        {/*</div>*/}
        {/*<br />*/}
        {/*<div>Menu status :*/}
        {/*{this.state.restaurant.menu && this.state.restaurant.menu.length !== 0 ? <Typography color="primary">verified</Typography> : <Typography color="error">empty</Typography>}*/}
        {/*</div>*/}
      </div>
    ) : <div />;
  }
}

export default RestaurantHome;