import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was created by{" "}
          <a
            href="https://github.com/Sandrac01"
            target="_blank"
            rel="noreferrer"
          >
            Sandra Chinouya 
          </a>{" "}
          and is{""}
          <a
            href="https://github.com/Sandrac01/the-react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://effortless-sorbet-5b82ca.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}


