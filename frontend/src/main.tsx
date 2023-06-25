import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter>
        <App />
        <ToastContainer />
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>,
);