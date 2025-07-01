'use client'

import { useState } from "react";
import "./Envelope.scss"
import Navigation from "./Navigation";
import { useNavigationContext } from "../../context/useNavigationContext";
import { navMapping } from "../../utils/navigationUtils";

const Envelope = ({ children }) => {
    const { navState } = useNavigationContext();

    return (
        <div className={"env-container " + (navState !== "Home" ? "expand" : "")}>
            <div className="env-header-container" style={{ height: "10rem" }}>
                <Navigation />
            </div>
            <div className={"env-body-container" + (navState !== "Home" ? "" : " empty")}>
                {navMapping[navState]}
            </div>
        </div>
    )
}

export default Envelope;