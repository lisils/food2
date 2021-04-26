
import { Link } from "react-router-dom";
import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import HelpIcon from '@material-ui/icons/Help';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  AppBar, Tabs, Tab
}
from '@material-ui/core';
import './DriverBar.css'
class DriverBar extends React.Component {

  render() {

    return (
      <div>
        {/*<br />*/}
        {/*<h3><b><i>Driver ToolBar</i></b></h3>*/}
        {/*<br />*/}

        <AppBar position="static" style={{ background: '#a2d1e8' }}>
          <Tabs value="value" onChange={() => {}} aria-label="simple tabs example" centered>
          {/*<List component="nav">*/}

            <Link to={"/driver/home"} className="link" color="secondary" >
              {/*<ListItem>*/}
                {/*<ListItemText primary={"All Pending Orders"} />*/}
                <Tab label="All Pending Orders" icon={<FastfoodIcon />}/>
              {/*</ListItem>*/}
              {/*<Divider />*/}
            </Link>

            <Link to={"/driver/order"} className="link">
              {/*<ListItem>*/}
                {/*<ListItemText primary={"My Active Order"} />*/}
                <Tab label="My Active Order" icon={<AssignmentIcon />}/>
              {/*</ListItem>*/}
              {/*<Divider />*/}
            </Link>
            <Link to={"/driver/history"} className="link">
              {/*<ListItem>*/}
                <Tab label="My Order History" icon={<CalendarTodayIcon />}/>
                {/*<ListItemText primary={"My Order History"} />*/}
              {/*</ListItem>*/}
              {/*<Divider />*/}
            </Link>
          {/*</List>*/}

          </Tabs>
        </AppBar>

      </div>
    );
  }
}

export default DriverBar;