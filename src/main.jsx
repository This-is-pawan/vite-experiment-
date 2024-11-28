import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

// Create a query client
const queryClient = new QueryClient();

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
