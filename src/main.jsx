import React, { StrictMode } from "react";
import { createRoot }from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/Routes";
import AuthProvider from "./context/AuthProvider";

import "animate.css";
import "aos/dist/aos.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
