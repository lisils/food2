import React, {useEffect, useState} from 'react';
import TopBar from '../topbar/Topbar';
import './HomePage.css'
import {Link} from "react-router-dom";
import {
    AppBar,
    Tabs,
    Tab
} from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AdbIcon from '@material-ui/icons/Adb';


const HomePage = () => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetch("https://yummyeat.herokuapp.com/api/restaurant/all")
            .then(response => response.json())
            .then((response) => {
                console.log(response)
                setRestaurants(response)
            })
    }, [])

    return (
        <div className="container">
            <div className="text-part">
                <h2>
                    🍔 🍦 You are in the right place to find delicious food! 🍕 🥤
                </h2>
            </div>

            <div>
                <div className="container">
                    <div className="image-part">
                        <div className="row align-items-center">
                            <img
                                className="home-image"
                                src="https://caspiannews.com/media/caspian_news/all_original_photos/1528831479_7183783_1528831390_5761793SFF-Foto-2018-001web2.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

                <h2>Check Top {restaurants.length} restaurants in our website!</h2>

                <div >
                    {
                        restaurants.map(restaurant =>
                            <div>
                                <Link to={`/restaurants/${restaurant.id}`}>
                                    <h4>
                                        {restaurant.information.restaurantName}
                                    </h4>
                                </Link>
                            </div>
                        )
                    }
                </div>

                <div>
                    <AppBar position="static" style={{background: '#f6e6e4'}}>
                        <Tabs value="value" onChange={() => {
                        }} aria-label="simple tabs example" centered>
                            <Link to={"/login"} className="link" color="secondary">
                                <Tab label="Login/Register" icon={<AccountBoxIcon/>}/>
                            </Link>
                        </Tabs>
                    </AppBar>
                </div>
            </div>


            {/*<Link to={`/login`}>*/}
            {/*<button>login</button>*/}
            {/*</Link>*/}

            {/*<h1>There are ${restaurants.length} restaurants</h1>*/}
        </div>
    )

}

export default HomePage
