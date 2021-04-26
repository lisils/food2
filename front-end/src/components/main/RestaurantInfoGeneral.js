import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import {Card, CardHeader, Grid, Tab} from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AdbIcon from "@material-ui/icons/Adb";
import HomeIcon from '@material-ui/icons/Home';

const RestaurantInfoGeneral = () => {
    const {id} = useParams();
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch(`https://yummyeat.herokuapp.com/api/restaurant/menu/${id}`)
             .then(response => response.json())
            .then((response) => {
                setMenu(response)
            })
    }, [])

    return (

        <div className="container">
            <div className="text-part">
                <h2>
                    🍔 🍦 You are in the right place to find delicious food! 🍕 🥤
                </h2>
            </div>
            {
                menu.map(dish =>
                        <Grid container spacing={3} justify="space-evenly">
                            <Grid item xs={3}>
                            <Card>
                            <CardHeader
                            style={{backgroundColor: "#91daf2", height: "30px"}}
                            titleTypographyProps={{variant:'body1', color:'textSecondary'}}
                            title={dish.dishName}
                            subheader={"$ " + dish.price}
                            />
                            <img className="dishCardImage" src= {dish.imageUrl} alt={dish.dishName} />
                            </Card>
                            </Grid>
                        </Grid>
                )
            }
            <Link to={"/login"} className="link" color="secondary">
                <Tab label="Login" icon={<AccountBoxIcon/>}/>
            </Link>

            <Link to={"/register"} className="link" color="secondary">
                <Tab label="Register" icon={<AdbIcon/>}/>
            </Link>

            <Link to={"/home"} className={"link"}>
                <Tab label="Home" icon={<HomeIcon/>}/>
            </Link>
        </div>

    )
}

export default RestaurantInfoGeneral
