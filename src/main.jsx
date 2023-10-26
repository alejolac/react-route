import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from "./error-page"
import Contact from "./routes/contact";
import Root, { Loader as rootLoader } from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
