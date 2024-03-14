import { useEffect, useState } from "react";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import {
  BrowserRouter as Router,
  useLocation,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home";
import GamePlay from "./pages/GamePlay/GamePlay";
import Landing from "./pages/Landing/Landing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { GameProvider } from "./contexts/GameContext";

function AppRoutes() {
  const [firstVisit, setFirstVisit] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setFirstVisit(false);
    } else {
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const routes = useRoutes([
    { path: "/", element: firstVisit ? <Landing /> : <Home /> },
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

// Main App component
function AppWrapper() {
  return (
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  );
}

// Moved useTheme and conditional class application to a separate component
function App() {
  const { isDark } = useTheme(); // useTheme now works because it's within the ThemeProvider context

  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default AppWrapper; // Export the wrapper component instead
