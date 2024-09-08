import './App.css';
import { router } from "./Routers/router";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query'
import React from "react";
import {HelmetProvider} from "react-helmet-async";

const queryClient = new QueryClient()

function App() {
  return (
      <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
      </HelmetProvider>
  );
}

export default App;
