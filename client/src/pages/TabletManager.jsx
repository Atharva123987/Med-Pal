import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import Toast from 'react-bootstrap/Toast';
import AllMedicinesTable from '../components/Medicines/AllMedicinesTable';
import AddMedicineModal from '../components/Medicines/AddMedicineModal';
import Navbar from '../components/Navbar'
import './tabletManager.css'
import Form from 'react-bootstrap/Form';
import { AiOutlineSearch } from 'react-icons/ai'
import { BsArrowUpSquareFill } from 'react-icons/bs'
import Footer from '../components/Footer'
import { HashLink as L } from 'react-router-hash-link';
import { useAuthContext } from '../hooks/useAuthContext';
import Sidenav from '../components/Sidenav'

const TabletManager = () => {
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState(1);
	const [expiry, setExpiry] = useState(new Date());
	const [dosageEnd, setDosageEnd] = useState(new Date());
	const [frequency, setFrequency] = useState(null);
	const checkboxesRef = useRef([]);
	const [selectedFile, setSelectedFile] = useState(null);
	const [fetchedData, setFetchedData] = useState(null);
	const [showToast, setShowToast] = useState(false);
	const [nameError, setNameError] = useState(false);
	const [flag, setFlag] = useState(0);
	const [searchQuery, setSearchQuery] = useState(null)
	const [deleteCalled, setDeleteCalled] = useState(false);
	const [deleteToast, setDeleteToast] = useState(false)
	const { user } = useAuthContext()

	useEffect(() => {
		handleFetch();
	}, [flag, deleteCalled])


	const handleFetch = async () => {
		try {
			const response = await axios.get(
				"https://medpal-backend.onrender.com/api/medicines",
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			setFetchedData(response.data);
		} catch (err) {
			console.log(err);
		}
	};



	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!name || !quantity || !expiry) {
			setNameError(true)
		}

		const checkedValues = checkboxesRef.current
			.filter((checkbox) => checkbox.checked)
			.map((checkbox) => checkbox.value);
		var timeOfDay = [];
		checkboxesRef.current.forEach((checkbox, i) => {
			timeOfDay.push(checkbox.checked);
		});

		const axios = require("axios");
		let data = JSON.stringify({
			name: name,
			quantity: quantity,
			expiry: expiry,
			frequency: frequency,
			timeOfDay: {
				morning: {
					yesOrNot: timeOfDay[0],
					beforeFood: true,
				},
				afternoon: {
					yesOrNot: timeOfDay[1],
					beforeFood: true,
				},
				evening: {
					yesOrNot: timeOfDay[2],
					beforeFood: true,
				},
				night: {
					yesOrNot: timeOfDay[3],
					beforeFood: true,
				},
			},
			dosageEndDate: dosageEnd,
		});

		let config = {
			method: "post",
			maxBodyLength: Infinity,
			url: "https://medpal-backend.onrender.com/api/medicines",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
			data: data,
		};

		axios
			.request(config)
			.then((response) => {
				if (response.status === 200) {
					setShowToast(true);
					setFlag(!flag);
				}
			})
			.catch((error) => {
				setNameError(true);
			});
	};




	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const tempRef = useRef(null);



	return (
		<>
							<Navbar buttons='true' LogButton='true' />

			<div className='page-container'>
				<Sidenav />
				<div style={{ width: "100%" }}>
					<h3 id='medicines-heading'>Medicine Manager</h3>

					{

						scrollPosition !== 0 ? (
							<L to={'#'}><BsArrowUpSquareFill id='back-to-top' /></L>
						) : ""
					}



					<div ref={tempRef} className='d-flex flex-row justify-content-evenly medicines-container'>
						{/* 
        <div>
          <UpcomingDose />


        </div> */}

						<div id='medicines-table' className='d-flex flex-column' >

							<div className='d-flex my-3'>
								{
									!fetchedData ? (<></>) : (
										<AddMedicineModal
											setName={setName}
											setQuantity={setQuantity}
											setExpiry={setExpiry}
											setFrequency={setFrequency}
											checkboxesRef={checkboxesRef}
											handleSubmit={handleSubmit}
											error={nameError}
										/>
									)
								}


							</div>

							<div>
								<AllMedicinesTable fetchedData={fetchedData} setDeleteCalled={setDeleteCalled} deleteCalled={deleteCalled} />
							</div>

						</div>

					</div >

					<div id='toasts' style={{ position: "fixed", zIndex: "10", top: "3%", right: "3%" }}>

						<Toast onClose={() => { setShowToast(false) }} bg='success' position='middle-center' show={showToast} delay={3000} autohide style={{ position: "relative", zIndex: "10" }}>
							<Toast.Header>
								<img
									src="holder.js/20x20?text=%20"
									className="rounded me-2"
									alt=""
								/>
								<strong className="me-auto text-success">Medicine Added!</strong>
								<small>{frequency?.charAt(0).toUpperCase() + frequency?.slice(1)}</small>
							</Toast.Header>
							<Toast.Body className='text-white'>Name : {name} | Quantity : {quantity}</Toast.Body>
						</Toast>

						<Toast onClose={() => { setNameError(false) }} bg='warning' position='middle-center' show={nameError} delay={2000} autohide style={{ position: "relative", zIndex: "10" }}>
							<Toast.Header>
								<img
									src="holder.js/20x20?text=%20"
									className="rounded me-2"
									alt=""
								/>
								<strong className="me-auto text-warning">Enter Valid Name!</strong>
							</Toast.Header>
							<Toast.Body className='text-white'>Medicine name should be unique</Toast.Body>
						</Toast>

						<Toast onClose={() => { setDeleteToast(false) }} bg='danger' position='middle-center' show={deleteToast} delay={3000} autohide style={{ position: "relative", zIndex: "10" }}>
							<Toast.Header>
								<img
									src="holder.js/20x20?text=%20"
									className="rounded me-2"
									alt=""
								/>
								<strong className="me-auto text-danger">Successfully Deleted!</strong>
							</Toast.Header>
							<Toast.Body className='text-white'>
								Medicine entry deleted
							</Toast.Body>
						</Toast>


					</div>
					<Footer />
				</div>
			</div>
		</>
	);

};

export default TabletManager;
