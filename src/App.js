import React from "react";
import "./App.css";
import Home from './pages/Home'
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from "./components/Calendar";

const App = () => {
  return (<>
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/calendar" component={Calendar} />
    </BrowserRouter>
    </>
);
}

export default App;
