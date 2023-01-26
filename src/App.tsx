import { RouterProvider } from "react-router-dom";
import router from "@/router";

import "normalize.css";
import "@/styles/global.scss";

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
