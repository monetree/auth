import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Auth0Provider
      domain="main.ddvn5oizaikgt.amplifyapp.com"
      clientId="WYFTm0KGNNnW0ylqcN5bTxx3TYvOlmCp"
      redirectUri={window.location.origin}
    >
     <App />
    </Auth0Provider>,
);