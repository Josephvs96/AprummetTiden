import { useState, useEffect } from 'react';
import { TotalTimeRow } from './TotalTimeRow';

const TotalTimeTable = () => {
	const [timeRepports, setTimeRepports] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/timeReport')
			.then((response) => response.json())
			.then((data) => setTimeRepports(data));
	}, []);

	return (
		<div className='container'>
			<table className='table table-hover table-striped'>
				<thead>
					<tr>
						<th>User Id</th>
						<th>Project</th>
						<th>Company</th>
						<th>Comment</th>
						<th>Total time</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{timeRepports.map((report) => (
						<TotalTimeRow key={report.id} timeRepport={report} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TotalTimeTable;
