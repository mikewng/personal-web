'use client'

import { useState } from "react";
import ArtPortfolio from "../ArtPortfolio/ArtPorfolio";
import "./Envelope.scss"
import Navigation from "./Navigation";

const Envelope = ({ children }) => {

    const [navState, setNavState] = useState(true)

    return (
        <div className="env-container">
            <div className="env-header-container" style={{height: "10rem"}}>
                <div className="env-header-screen-title">
                    Title
                </div>
                <Navigation isSubNav={navState}/>

            </div>
            <div className="divider" />
            <ArtPortfolio />

            {/* <button 
            onClick={() => setNavState(!navState)} 
            style={
                {
                    padding: "4rem",
                    position: "absolute",
                    bottom: 0
                }
            }
            >Click</button> */}
            {/* {children} */}
        </div>
    )
}

export default Envelope;