import "./App.css";
import * as React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  useLocation,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home";
import GamePlay from "./pages/GamePlay/GamePlay";
import Landing from "./pages/Landing/Landing";
import { GameProvider } from "./contexts/GameContext";

function AppRoutes() {
  const [firstVisit, setFirstVisit] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setFirstVisit(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  let initialElement = firstVisit ? <Landing /> : <Home />;

  const routes = useRoutes([
    { path: "/", element: initialElement },
    {
      path: "/play",
      element: (
        <GameProvider>
          <GamePlay />
        </GameProvider>
      ),
    },
    { path: "/home", element: <Home /> },
    { path: "/landing", element: <Landing /> },
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
