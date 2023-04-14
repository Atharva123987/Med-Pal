import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Log_In from "../assets/login.png";
import Register from "../assets/register.png";
import Logo from "../assets/logo.png";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button } from "react-bootstrap";
import {FiLogOut} from 'react-icons/fi'

const Navbar = (props) => {
	const { logout } = useLogout();
	const { user } = useAuthContext();

	const handleClick = () => {
		logout();
	};

	return (
		<>
			<div className="nav-container">
				<a href="/">
					<img src={Logo} className="logo" alt="website logo" />
				</a>
				<div className="heading">MEDPAL</div>
				<div className="navbar-buttons">

					
					{user && (
						<div>
							{/* <span>{user.email}</span> */}
							<Button variant="light" id="logout-button" onClick={handleClick}>Log out <FiLogOut/></Button>
						</div>
					)}
					<div>
						{props.buttons && !user && (
							<>
								<Link to={"/login"}>
									<img
										src={Log_In}
										id="login-button"
										alt="login"
									/>
								</Link>
								<Link to={"/register"}>
									<img
										src={Register}
										id="register-button"
										alt="register"
									/>
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
export default Navbar;
