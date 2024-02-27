import "./App.css";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  useLocation,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home";
import PlayingField from "./components/PlayingField/PlayingField";

function AppRoutes() {
  const location = useLocation();
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/playing-field", element: <PlayingField /> },
  ]);

  return (
    <AnimatePresence mode="wait">
      {routes && React.cloneElement(routes, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}
