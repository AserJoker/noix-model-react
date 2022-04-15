import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Container } from "./Container";
import "./index.css";
import { demo } from "./model";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Container models={[demo]}>
      <App />
    </Container>
  </React.StrictMode>
);
