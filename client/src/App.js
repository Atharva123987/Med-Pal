import React from "react";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Calendar from "./components/Calendar";
import TabletManager from "./pages/TabletManager";
import Appointments from "./pages/Appointments";
import Admin from "./pages/Admin";
import Search from "./pages/Search";
import Charts from "./pages/ChartsPage";
import ErrorPage from "./pages/ErrorPage";
import ErrorPageLink from "./pages/ErrorPageLink";
import { useAuthContext } from "./hooks/useAuthContext";

const AppRoutes = ({ user }) => {
	const isAuthenticated = user !== null;

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route
					path="/login"
					render={() =>
						!isAuthenticated ? (
							<Login />
						) : (
							<Redirect to="/dashboard" />
						)
					}
				/>
				<Route
					path="/register"
					render={() =>
						!isAuthenticated ? (
							<Register />
						) : (
							<Redirect to="/dashboard" />
						)
					}
				/>
				<Route
					path="/dashboard"
					render={() =>
						isAuthenticated ? (
							<Dashboard />
						) : (
							<Redirect to="/error" />
						)
					}
				/>
				<Route
					path="/dashboard"
					render={() =>
						isAuthenticated ? (
							<Dashboard />
						) : (
							<Redirect to="/error" />
						)
					}
				/>
				<Route
					path="/about"
					render={() =>
						isAuthenticated ? <About /> : <Redirect to="/error" />
					}
				/>
				<Route
					path="/calendar"
					render={() =>
						isAuthenticated ? (
							<Calendar />
						) : (
							<Redirect to="/error" />
						)
					}
				/>
				<Route
					path="/medicines"
					render={() =>
						isAuthenticated ? (
							<TabletManager />
						) : (
							<Redirect to="/error" />
						)
					}
				/>
				<Route
					path="/appointments"
					render={() =>
						isAuthenticated ? (
							<Appointments />
						) : (
							<Redirect to="/error" />
						)
					}
				/>
				<Route
					path="/admin"
					render={() =>
						isAuthenticated ? <Admin /> : <Redirect to="/error" />
					}
				/>
				<Route
					path="/search"
					render={() =>
						isAuthenticated ? <Search /> : <Redirect to="/error" />
					}
				/>
				<Route
					path="/charts"
					render={() =>
						isAuthenticated ? <Charts /> : <Redirect to="/error" />
					}
				/>
				<Route path="/error" component={ErrorPage} />
				<Route component={ErrorPageLink} />
			</Switch>
		</BrowserRouter>
	);
};

const App = () => {
	const { user } = useAuthContext();

	return (
		<>
			<AppRoutes user={user} />
		</>
	);
};

export default App;
