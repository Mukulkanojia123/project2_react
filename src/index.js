import React , {lazy , Suspense}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { About } from './components/About';
import { Error } from './components/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import reportWebVitals from './reportWebVitals';
import Contact from './components/Contact';
// import Grocery from './components/Grocery';
// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamic imoprt

const Grocery = lazy(()=>import('./components/Grocery'))

const appRouter = createBrowserRouter([
   {
     path: "/",
     element : <App/>,
     children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path : "/about",
        element : <About/>,
      
      },
      {
        path : "/contact",
        element : <Contact/>,
      },
      {
        path : "/grocery",
        element : <Suspense fallback = {<h1>Loading......</h1>}><Grocery/></Suspense> ,
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu />
      }
     ],
     errorElement:<Error/>,
   },
  
 ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
    <RouterProvider router={appRouter} />
 </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
