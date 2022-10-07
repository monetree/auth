import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Auth0Provider
      domain="joinmosaic-test.us.auth0.com"
      clientId="0HpNi0Ml91gEvziHtbpY86YA6BFeweNu"
      redirectUri={window.location.origin}
    >
     <App />
    </Auth0Provider>,
);