import { useState } from "react";
import "./ContactDropdown.scss"

const ContactDropdown = ({ }) => {
    const [openDropDown, setOpenDropdown] = useState(false)
    return (
        <div className="about-me-contact-container">
            <div className={"contact-me-text-container" + (openDropDown ? " selected" : "")} onClick={() => setOpenDropdown(!openDropDown)}>
                <div className="contact-me-text">Contact Me!</div>
            </div>
            <div className={"about-me-contact-list-container" + (openDropDown ? " active" : " close")}>
                <div className="cl-item email">Email</div>
                <div className="cl-item instagram">Instagram</div>
                <div className="cl-item x">X</div>
                <div className="cl-item bluesky">Bluesky</div>
            </div>
        </div>
    )
}

export default ContactDropdown;