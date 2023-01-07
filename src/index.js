import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Context from "./context/context";
import Layout from "./componoments/layout";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <BrowserRouter>
         <Context>
             <Layout>
                 <App />
             </Layout>
         </Context>
      </BrowserRouter>
  </React.StrictMode>
);
