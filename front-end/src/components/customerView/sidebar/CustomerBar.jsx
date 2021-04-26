import React from 'react';
import { Link } from "react-router-dom";
import {
    AppBar,
    Tabs,
    Tab
}
  from '@material-ui/core';
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HomeIcon from '@material-ui/icons/Home';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
class CustomerBar extends React.Component {
  render() {
    return (
        <div>
          <AppBar position="static" style={{ background: '#a2d1e8' }}>
            <Tabs value="value" onChange={() => {}} aria-label="simple tabs example" centered>
              <Link to={"/customer/home"} className="link" color="secondary">
                <Tab label="Home Page" icon={<HomeIcon/>}/>
              </Link>
              <Link to={"/customer/profile"} className="link">
                <Tab label="My Profile" icon={<PermContactCalendarIcon/>}/>
              </Link>
              <Link to={"/customer/cart"} className="link">
                  <Tab label="My Shopping Cart" icon={<LocalGroceryStoreIcon/>}/>
              </Link>
              <Link to={"/customer/orders"} className="link">
                  <Tab label="My Active Orders" icon={<AssignmentIcon/>}/>
              </Link>
              <Link to={"/customer/history"} className="link">
                  <Tab label="My Order History" icon={<CalendarTodayIcon/>}/>
              </Link>
            </Tabs>
          </AppBar>
        </div>
    );
  }
}

export default CustomerBar;