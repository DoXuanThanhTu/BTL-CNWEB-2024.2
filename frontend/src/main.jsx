import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { AppContextProvider } from "./context/AppContext.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import { BrowserRouter } from "react-router-dom";
export const server = "http://localhost:8000";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>
);
