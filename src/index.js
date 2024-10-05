import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' in React 18
import App from "./App"; // Assuming you have an App component

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Use createRoot in React 18

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
