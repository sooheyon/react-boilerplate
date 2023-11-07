import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const container = document.getElementById("root") as HTMLElement;

const GlobalStyled = createGlobalStyle`${reset}`;

ReactDOM.createRoot(container).render(
  <>
    <GlobalStyled />
    <App />
  </>
);
