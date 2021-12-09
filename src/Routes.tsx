import { Route, Routes as Switch } from "react-router-dom";
import BarLayout from "./components/BarLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<BarLayout />}>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Switch>
  );
}
