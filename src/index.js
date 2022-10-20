import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assest/all.css";
import LoadingSpinner from "./components/Loading";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
const App = lazy(() => import("./App.js"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div>
          {" "}
          <LoadingSpinner />{" "}
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
);
