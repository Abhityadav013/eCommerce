import React from "react";
import logo from "./logo.svg";
import Counter from "./features/counter/Counter";
import "./App.css";
import Product from "./features/product-list/ProductList";
import Navbar from "./features/navbar/Nvabar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />    
  },
  {
    path: "/login",
    element: <LoginPage />    
  },
  {
    path: "/signup",
    element: <SignupPage />    
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
