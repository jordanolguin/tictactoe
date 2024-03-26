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
import { AudioProvider } from "./contexts/AudioContext";

function AppRoutes() {
  const location = useLocation();

  const routes = useRoutes([
    { path: "/", element: <Home /> },
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

function AppWrapper() {
  return (
    <Router>
      <ThemeProvider>
        <AudioProvider>
          <App />
        </AudioProvider>
      </ThemeProvider>
    </Router>
  );
}

function App() {
  const { isDark } = useTheme();

  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default AppWrapper;
