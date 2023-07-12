import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";

export interface PageData {
  path: string;
  element: React.ReactNode;
  name: string;
}

const pages: PageData[] = [

  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/store",
    element: <Store />,
    name: "Store",
  },

  {
    path: "/about",
    element: <About />,
    name: "About",
  },
];
const router = createBrowserRouter([
  {
    element: <App pages={pages} />,
    children: pages,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
