import Navbar from "./Navbar.jsx"
import g1 from "../assets/girl1.png"
import {motion} from "framer-motion"



const hero = () =>{
    
    return(
        <>
        <Navbar/>
            <div className="flex border border-black p-9 justify-between mt-5">
                <div className="content-center">
                    <h1 className="text-8xl font-semibold">STUDY</h1>
                    <h1 className="text-8xl font-semibold">
                        <span className="text-orange-500">ABROAD</span> IS
                    </h1>
                    <h1 className="text-8xl font-semibold">EASY WITH US</h1>
                </div>
                <div>
                    <img src={g1}></img>
                </div>
            </div>
            
        </>
    )
}

export default hero;