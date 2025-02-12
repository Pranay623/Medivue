import Navbar from "./Navbar.jsx"
import Land from "./Land.jsx"
import g1 from "../assets/girl1.png"
import {motion} from "framer-motion"
import Program from "./Program.jsx"



const hero = () =>{
    
    return(
        <>
        <Navbar/>
        <div className="flex flex-col gap-9">
        
        <Land/>
        <Program/>
        </div>
        </>
    )
}

export default hero;