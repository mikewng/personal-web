'use client'

import { useState } from "react";
import ArtPortfolio from "../ArtPortfolio/ArtPorfolio";
import "./Envelope.scss"
import Navigation from "./Navigation";

const Envelope = ({ children }) => {

    const [navState, setNavState] = useState(false)

    return (
        <div className={"env-container " + (navState ? "expand" : "")}>
            <div className="env-header-container" style={{height: "10rem"}}>
                <Navigation isSubNav={navState}/>
            </div>
            <div className="divider" />
            {
                navState && 
                <div className="env-body-container">
                    <ArtPortfolio />
                </div>
            }

            <button 
                style={{
                    padding: "1rem",
                    position: "absolute",
                    bottom: 0
                }}
                onClick={() => {
                    setNavState(!navState)
                }}
            >
                Click
            </button>
        </div>
    )
}

export default Envelope;