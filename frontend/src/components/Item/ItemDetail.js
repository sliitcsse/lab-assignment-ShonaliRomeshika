import React, { useState } from 'react'
import {AppBar, Toolbar, Tab, Tabs, Typography} from '@mui/material';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar  sx={{ backgroundColor: "#232F3D" }} position='sticky'>
          <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
                Shopping Cart
            </Typography>
            </NavLink> 
            <Tabs
                sx={{ ml: "auto" }}
                textColor='inherit' 
                indicatorColor='secondary' 
                value={value} 
                onChange={(e, val) => setValue(val)}
            >
                <Tab LinkComponent={NavLink} to="/items" label='Items'/>
                <Tab LinkComponent={NavLink} to="/promotions" label='Promotions'/>
            </Tabs>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header