import Socials from "./components/Socials";
import "./Navigation.scss"
import { useNavigationContext } from "../../context/useNavigationContext";


const Navigation = () => {
    const { navState, setNavState } = useNavigationContext();

    return (
        <div className={"env-nav-container " + (navState !== "Home" ? "sub-nav" : "main-nav")}>
            <div className="env-imageicon-container" onClick={() => { setNavState("Home") }} />
            <div className="env-header-text-container">
                <div className="env-header" onClick={() => { setNavState("About Me") }}>Mike Wang</div>
                {
                    navState === "Home" &&
                    <div className="env-subheader email">cecilaart@gmail.com</div>
                }
            </div>
            <div className="env-all-links-container">
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
        </div>
    )
}

export default Navigation;