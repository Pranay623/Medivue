import Navbar from "./Navbar.jsx"
import Land from "./Land.jsx"
import g1 from "../assets/girl1.png"
import {motion} from "framer-motion"
import Program from "./Program.jsx"
import About from "./About.jsx"



const hero = () =>{
    
    return(
        <>
        <Navbar/>
        <div className="flex flex-col gap-10">
        <Land/>
        <Program/>
        <About/>
        </div>
        </>
    )
}

export default hero;