import { ArrowDropDown, Image, Notifications, Search } from "@mui/icons-material";
import { Box, Container } from "@mui/system";
import { Avatar,Typography } from '@mui/material';
import React, { useState } from "react";
import "./Navbar.scss";

// const Tool=styled(Toolbar)({

//     margin:"0px",
//       display:"flex",
//       justifyContent:"space-between",
//   })

const Navbar = () => {
const [scrolll,setScroll]=useState(false);

window.onscroll=()=>{
  setScroll(window.pageYOffset===0?false:true)
 return ()=> window.onscroll==null;

  
}

  return (
    <div className={scrolll===true?"nav scrolled":"nav"}>
    <div className="container">
     <div className="left">
     <img className="img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        
          
        />
        <span>Homepage</span>
        <span>Series</span>
        <span>Movies</span>
        <span>Popular</span>
        <span>My list</span>
        </div>
    <div className="right">
        <Search sx={{ color: "white" ,marginRight:"10px"}} />
        <Typography sx={{marginRight:"15px"}}>KID</Typography>
        <Notifications sx={{ color: "white",marginRight:"20px" }} />
        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
         <div className="spa">
           <ArrowDropDown className="icon" sx={{color:"white",marginRight:"40px",cursor:"pointer"}}/>
           <div className="option">
           <span>LOGIN</span>
           <span>ACCOUNT</span></div></div>
           </div>
        </div>
    </div>
  );
};

export default Navbar;
