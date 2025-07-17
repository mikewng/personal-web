import { useState } from "react"
import "./AboutMe.scss"
import useInterval from "@/app/assets/hooks/useInterval"
import ContactDropdown from "./ContactDropdown/ContactDropdown"
import aboutMePic from "../../assets/gallery-imgs/a_3_28_25_1.png"

const AboutMe = ({ }) => {
    const aliases = ["Mike Wang", "Zhixuan Wang"]

    const [currName, setCurrName] = useState(0)

    useInterval(() => {
        if (currName >= aliases.length - 1) {
            setCurrName(0)
        } else {
            setCurrName((prevCount) => prevCount + 1)
        }
    }, 5000)

    return (
        <div className="about-me-container">
            <div className="about-me-picture-container">
                {/* <img className="about-me-image" src={aboutMePic?.src} /> */}
            </div>
            <div className="about-me-content-container">
                <div className="about-me-header-container">
                    <div className="header-text-static">Hello, my name is</div>
                    <div className="header-text-dynamic">{aliases[currName]}</div>
                    <div className="header-text-static">!</div>
                </div>
                <div className="about-me-body-container">
                    <div className="am-line">I'm a computer science graduate from Georgia Institute of Technology.</div>
                    <div className="am-line">I am proficient in both frontend and backend code for web applications, and I have an interest in AI architecture.</div>
                    <div className="am-line">I am also an artist who likes to draw characters from games and shows I like.</div>
                    <div className="am-line">
                        {`I can speak`}
                        <div>English</div>
                        <div>中文</div>
                        <div>日本語</div>
                        <div>!</div>
                    </div>
                </div>
            </div>
            <ContactDropdown />
        </div>
    )
}

export default AboutMe;