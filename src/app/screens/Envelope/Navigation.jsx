import Socials from "./SectionComponents/Socials";

const Navigation = () => {
    return (
        <div className="env-nav-container">
            <div className="env-imageicon-container">
            </div>
            <h1 className="env-header">Cecila</h1>
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