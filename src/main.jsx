import * as React from "react";
import * as ReactDOM from "react-dom/client";
import router from './routes'
import './app.css'

// Providers
import {
  RouterProvider,
} from "react-router-dom";
import { BasketProvider } from "./providers/basket";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <RouterProvider router={router} />
    </BasketProvider>
  </React.StrictMode>
);