import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AuthContextProvider } from "./context/AuthContext.js";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
);
