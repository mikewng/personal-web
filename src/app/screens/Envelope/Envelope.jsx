import ArtPortfolio from "../ArtPortfolio/ArtPorfolio";
import "./Envelope.scss"
import Navigation from "./Navigation";

const Envelope = ({ children }) => {
    return (
        <div className="env-container">
            <div className="env-header-container" style={{height: "10rem"}}>
                <div className="env-header-screen-title">
                    Title
                </div>
                <Navigation />

            </div>
            <div className="divider" />
            <ArtPortfolio />
            {/* {children} */}
        </div>
    )
}

export default Envelope;