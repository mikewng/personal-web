import "./screens/Envelope/Envelope"
import Envelope from "./screens/Envelope/Envelope";
import { NavigationProvider } from "./context/useNavigationContext";
import "../App.scss"

export default function Home() {
  return (
    <NavigationProvider>
      {/* <div className="web-core-screen-container"> */}
        <Envelope />
      {/* </div> */}
    </NavigationProvider>
  );
}
