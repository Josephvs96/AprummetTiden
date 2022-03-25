import { useEffect, useState } from 'react';

export const TotalTimeRow = ({ timeReport }) => {
	const [company, setCompany] = useState('');
	const [project, setProject] = useState('');
	const [totalTime, setTotalTime] = useState('');

	useEffect(() => {
		fetch('http://localhost:4000/companies/' + timeReport.companyId)
			.then((response) => response.json())
			.then((data) => setCompany(data.name));

		fetch('http://localhost:4000/projects/' + timeReport.projectId)
			.then((response) => response.json())
			.then((data) => setProject(data.name));

		const calculateTotalTime = () => {
			const hours = Math.floor(timeReport.minutes / 60);
			const minutes = timeReport.minutes % 60;
			const totalTimeText = `${hours}h ${
				minutes > 0 ? minutes + 'min' : ''
			}`;
			setTotalTime(totalTimeText);
		};

		calculateTotalTime();
	}, []);

	return (
		<tr>
			<td>{timeReport.userId}</td>
			<td>{project}</td>
			<td>{company}</td>
			<td>{timeReport.comment}</td>
			<td>{totalTime}</td>
			<td>{timeReport.date}</td>
		</tr>
	);
};
