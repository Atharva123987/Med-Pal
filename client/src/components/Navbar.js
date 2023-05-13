import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button } from "react-bootstrap";
import { FiLogOut } from 'react-icons/fi'
import { MdDashboard } from 'react-icons/md'

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
					<img src="https://ik.imagekit.io/medpal/logo.webp?updatedAt=1683913606511" className="logo" alt="website logo" />
				</a>
				<div className="heading">MEDPAL</div>
				<div className="navbar-buttons">


					{/* {user && (
						
					)} */}
					<div>
						{props.buttons && !user && (
							<>
								<Link to={"/login"}>
									<img
										src="https://ik.imagekit.io/medpal/login.webp?updatedAt=1683913603920"
										id="login-button"
										alt="login"
									/>
								</Link>
								<Link to={"/register"}>
									<img
										src="https://ik.imagekit.io/medpal/register.webp?updatedAt=1683913606398"
										id="register-button"
										alt="register"
									/>
								</Link>
							</>
						)}

						{props.buttons && user && (
							<>

								<Link to={'/dashboard'} className="navbar-buttons" > <Button variant="light" className="navbar-buttons" id="dashboard-button">Dashboard  <MdDashboard /></Button></Link>
								{/* <span>{user.email}</span> */}
								
								<Button variant="light" className="navbar-buttons" id="logout-button" onClick={handleClick}>Log out  <FiLogOut /></Button>
								

							</>
						)
						}
					</div>
				</div>
			</div>
		</>
	);
};
export default Navbar;
