import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import "./ListItem.scss"
const ListItem = ({index}) => {
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const [hover,sethover]=useState(false);
  return (
    
    <div className='card'
    style={{
    left: hover && index* 220 -50+ index*2.5}
    }
     onMouseEnter={()=>sethover(true)}  onMouseLeave={()=>sethover(false)} >
       <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />
      <video src={trailer} autoPlay loop/>
       <div className='info'>
         <div className="iconss">
           <PlayArrow sx={{marginRight:"10px",border:"1px solid",borderRadius:"50%",fontSize:"16px",padding:"5px" }}/>
           <Add sx={{marginRight:"10px",border:"1px solid",borderRadius:"50%",fontSize:"16px",padding:"5px"  }}/>
           <ThumbUpAltOutlined sx={{marginRight:"10px",border:"1px solid",borderRadius:"50%",fontSize:"16px",padding:"5px"  }}/>
           <ThumbDownOutlined sx={{marginRight:"10px",border:"1px solid",borderRadius:"50%" ,fontSize:"16px",padding:"5px" }}/>
         </div>
         <div className="itemInfo">
           <span>1 hour 14 min</span>
           <span style={{  border: "1px solid gray",
          padding: "1px 3px",
          margin: "0 10px"}}>+16 </span>
           <span>2000</span>
           <span style={{fontWeight:"500",marginLeft:"10px",color:"white"}}> Action</span>
         </div>
        <div className="desc">
        Gran Torino" is an original script and concept by screenwriter Nick Schenk, so Walt and the plot are completely fictional.
        </div>
        {/* <div className="genre"  style={{color:"lightgray",marginbottom:"5px"}}>
          Action
        </div> */}

       </div>

    </div>
  )
}

export default ListItem