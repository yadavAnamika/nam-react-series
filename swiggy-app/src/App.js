import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import BodyComponent from "./components/Body";

const AppComponent = () => {
    return (
        <div className="app-card">
            <Header />
            <BodyComponent />
            <div className="footer"></div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);