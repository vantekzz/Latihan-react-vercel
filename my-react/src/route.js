import React, { Component } from "react";
import App from "./App";

const Home= React.lazy(() => import("./Hello"));
const Product = React.lazy(()=> import("./product"));
const Register = React.lazy(()=> import("./Register"));

const routes = [
    {path : "/" , Component : Home},
    {path : "/product" , Component : Product},
    {path : "/register" , Component : Register},
];

export default App;
