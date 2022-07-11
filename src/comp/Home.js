import { AcUnit } from "@mui/icons-material"
import { Box } from "@mui/material"
import Feature from "./Feature"
import "./Home.scss"
import List from "./List"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div className='home'>
<Navbar/>

 <Feature/>
 <List/>
 <List/>
 <List/>
 <List/>
    </div>
  )
}

export default Home