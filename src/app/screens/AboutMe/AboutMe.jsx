import { useState } from "react"
import "./AboutMe.scss"
import useInterval from "@/app/assets/hooks/useInterval"
import ContactDropdown from "./ContactDropdown/ContactDropdown"
import aboutMePic from "../../assets/gallery-imgs/a_3_28_25_1.png"
import { biographyLanguage } from "./library/languageLib"

import LanguageSelector from "./ContactDropdown/LanguageSelector"

const AboutMe = ({ }) => {
    const aliases = ["Mike Wang", "Zhixuan Wang"]

    const [selectedLanguage, setSelectedLanguage] = useState("en")
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
                <img className="about-me-image" src={aboutMePic?.src} />
            </div>
            <div className="about-me-content-container">
                <div className="about-me-header-container">
                    <div className="header-text-static">Hello, my name is</div>
                    <div className="header-text-dynamic">
                        {aliases[currName]}
                    </div>
                    <div className="header-text-static">!</div>
                </div>
                <div className="about-me-body-container">
                    {
                        biographyLanguage[selectedLanguage].map((x, i) => {
                            return (
                                <div className="am-line" key={i}>{x}</div>
                            )
                        })
                    }
                </div>
                <div className="about-me-footer-container">
                    <LanguageSelector />
                </div>
            </div>
            {/* <ContactDropdown /> */}
        </div>
    )
}

export default AboutMe;