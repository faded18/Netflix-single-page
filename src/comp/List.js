import { ArrowBack, ArrowForward } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import ListItem from './ListItem'
import "./List.scss"
const List = () => {
  const [button,showbtn]=useState(false);
  const [slidenmbr,setslide]=useState(0);
const listslider = useRef();
const handleClick=(direction)=>{
  let distance=listslider.current.getBoundingClientRect().x-50;
if(direction==="left"&&slidenmbr>0){
  setslide(slidenmbr-1);
  listslider.current.style.transform=`translate(${distance+ (230)}px)`
console.log(distance)
}
if(direction==="right"&&slidenmbr<4){
  showbtn(true);
  setslide(slidenmbr+1)
  
  listslider.current.style.transform=`translate(${distance+ (-220)}px)`
  
  }

}

  return (
    <div className='list'>
    <span className='spanclass' >Continue to watch</span>
<div className='wrapper'>
<ArrowForward className='arrow' onClick={()=>handleClick("right")} 

/>
<div className="lists" ref={listslider}>
      
         <ListItem  index={0}/>
        
         <ListItem index={1} />
         

        
         <ListItem index={2}/>
       
         <ListItem index={3}/>

         <ListItem index={4}/>
         <ListItem index={5}/>  
         <ListItem index={6}/>
         <ListItem index={7}/>
         </div>
         
<ArrowBack className='arrowback' onClick={()=>handleClick("left")} style={{display:!button&& "none"}} />
</div>

      
    
    
    </div>
  )
}

export default List