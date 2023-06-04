import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { roomRoutes } from "./data/data.jsx";
import theme from "./theme";
import App from "./App.jsx";

// const router = createBrowserRouter(routes);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: roomRoutes,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
