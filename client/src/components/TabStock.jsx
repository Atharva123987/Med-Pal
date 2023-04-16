import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const TabStock = (props) => {
	const [fetchedMedicineData, setFetchedMedicineData] = useState(null);

	useEffect(() => setFetchedMedicineData(props.fetchedMedicineData), [props.fetchedMedicineData]);

	return (
		<>
			<div id="tab-stock" className="dash-component">
				<legend align="center">Medicine Stock</legend>

				<Table striped bordered hover>
					<tr>
						<th>Name</th>
						<th>Stock</th>
						<th>Expiry</th>
					</tr>

					{fetchedMedicineData?.map((val, key) => {
						return (
							<tr key={key}>
								<td>{val.name}</td>
								<td>{val.quantity}</td>
								<td>{new Date(val.expiry).toLocaleDateString()}</td>
							</tr>

						);
					})}
				</Table>

				<div className="dash-button-container">
					<button className="dash-button">
						<span>+</span>
					</button>
				</div>
			</div>
		</>
	);
};
export default TabStock;
