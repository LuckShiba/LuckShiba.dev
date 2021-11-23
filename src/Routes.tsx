import { Route, Routes as Switch } from "react-router-dom";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
    </Switch>
  );
}
