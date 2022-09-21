import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Auth0Provider
      domain="https://main.ddvn5oizaikgt.amplifyapp.com"
      clientId="MToy0ApInf5dDYIwifPsz"
      redirectUri={window.location.origin}
    >
     <App />
    </Auth0Provider>,
);