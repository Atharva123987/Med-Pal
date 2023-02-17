const TabStock = () => {
	const columns = [
		{
			name: "Crocin",
			stock: "10 days",
			expiryDate: "10-10-2024",
		},
		{
			name: "Atorvastatin",
			stock: "12 days",
			expiryDate: "4-12-2023",
		},
		{
			name: "Levothyroxine",
			stock: "31 days",
			expiryDate: "6-1-2023",
		},
		{
			name: "Metformin",
			stock: "10 days",
			expiryDate: "19-4-2024",
		},
		{
			name: "Lisinopril",
			stock: "31 days",
			expiryDate: "22-6-2023",
		},
		{
			name: "Amlodipine",
			stock: "12 days",
			expiryDate: "16-8-2024",
		},
		{
			name: "Metoprolol",
			stock: "40 days",
			expiryDate: "10-9-2024",
		},
		{
			name: "Albuterol",
			stock: "1 day",
			expiryDate: "18-3-2025",
		},
	];

	return (
		<>
			<div id="tab-stock" className="dash-component">
				<legend align="center">Tablet Stock</legend>

				<table>
					<tr>
						<th>Name</th>
						<th>Stock</th>
						<th>Expiry</th>
					</tr>

					{columns.map((val, key) => {
						return (
							<tr key={key}>
								<td>{val.name}</td>
								<td>{val.stock}</td>
								<td>{val.expiryDate}</td>
							</tr>
						);
					})}
				</table>

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
