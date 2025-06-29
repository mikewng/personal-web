import Socials from "./SectionComponents/Socials";
import "./Navigation.scss"

const Navigation = ({isSubNav}) => {
    return (
        <div className={"env-nav-container " + (isSubNav ? "sub-nav" : "main-nav")}>
            <div className="env-imageicon-container">
            </div>
            <h1 className="env-header">Cecila</h1>
            <div className="env-link-container email">cecilaart@gmail.com</div>
            <div className="env-link-container portfolio">
                Art Portfolio
            </div>
            <div className="env-link-container projects">
                Projects
            </div>
            <div className="env-link-container resume">
                Resume
            </div>
            <Socials />
        </div>
    )
}

export default Navigation;