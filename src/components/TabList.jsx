const TabList = () => {
	const columns = [
		{
			name: "Crocin",
			freq: "Daily",
			time: ["morning", "evening"],
			// selector: row => row.name,
			// sector: row => row.nativeName,
		},
		{
			name: "Norflox",
			freq: "Daily",
			time: ["morning", "evening"],
			// selector: row => row.name,
			// sector: row => row.nativeName,
			// sortable:true,
		},
		{
			name: "Becousule",
			freq: "Bi-weekly",
			time: ["morning", "evening"],
			// sector: row => row.capital,
		},
		{
			name: "Paracetamol",
			freq: "Daily",
			time: ["morning", "evening"],
			// sector: row => row.capital,
		},
	];

	return (
		<>
			<div id="tab-list" className="dash-component">
				<legend align="center">Tablet List</legend>

				<table>
					<tr>
						<th>Name</th>
						<th>Frequency</th>
						<th>Time</th>
					</tr>
					{columns.map((val, key) => {
						return (
							<tr key={key}>
								<td>{val.name}</td>
								<td>{val.freq}</td>
								<td>
									{val.time.map(
										(elem, i, time) => time[i] + ", "
									)}
								</td>
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
export default TabList;
