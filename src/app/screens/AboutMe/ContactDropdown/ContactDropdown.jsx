import "./ContactDropdown.scss"

const ContactDropdown = ({ }) => {
    return (
        <div className="about-me-contact-container">
            <div className="contact-me-text-container">Contact Me!</div>
            <div className="about-me-contact-list-container">
                <div className="cl-item email">Email</div>
                <div className="cl-item instagram">Instagram</div>
                <div className="cl-item x">X</div>
                <div className="cl-item bluesky">Bluesky</div>
            </div>
        </div>
    )
}

export default ContactDropdown;