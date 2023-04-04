import React from "react";
import "./App.css";
import './index.css'
import Home from './pages/Home'
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Calendar from "./components/Calendar";
import TabletManager from "./pages/TabletManager";
import Appointments from "./pages/Appointments";
import Admin from "./pages/Admin";
import Search from "./pages/Search";

const App = () => {
  return (<>
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/medicines" component={TabletManager}/>
        <Route path="/appointments" component={Appointments}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/search" component={Search}/>
    </BrowserRouter>
    </>
);
}

export default App;
