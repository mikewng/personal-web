import Socials from "./SectionComponents/Socials";
import "./Navigation.scss"
import { useNavigationContext } from "../../context/useNavigationContext";


const Navigation = () => {
    const { navState, setNavState } = useNavigationContext();

    return (
        <div className={"env-nav-container " + (navState !== "Home" ? "sub-nav" : "main-nav")}>
            <div className="env-imageicon-container" onClick={() => { setNavState("Home") }} />
            <h1 className="env-header">Cecila</h1>
            {
                navState === "Home" &&
                <div className="env-link-container email">cecilaart@gmail.com</div>
            }
            <div className="env-link-container portfolio" onClick={() => { setNavState("Portfolio") }}>
                Art Portfolio
            </div>
            <div className="env-link-container projects" onClick={() => { setNavState("Projects") }}>
                Projects
            </div>
            <div className="env-link-container resume" onClick={() => { setNavState("Resume") }}>
                Resume
            </div>
            <Socials />
        </div>
    )
}

export default Navigation;