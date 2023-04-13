import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Log_In from "../assets/login.png";
import Register from "../assets/register.png";
import Logo from "../assets/logo.png";
import { useLogout } from "../hooks/useLogout";

const Navbar = (props) => {
	const { logout } = useLogout();

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
					<div>
						<button onClick={handleClick}>Log out</button>
					</div>
					<div>
						{props.buttons && (
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
