import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}
