import { useEffect, useState } from 'react';

export const TotalTimeRow = ({ timeRepport }) => {
	const [company, setCompany] = useState('');
	const [project, setProject] = useState('');
	const [totalTime, setTotalTime] = useState('');

	useEffect(() => {
		fetch('http://localhost:4000/companies/' + timeRepport.companyId)
			.then((response) => response.json())
			.then((data) => setCompany(data.name));

		fetch('http://localhost:4000/projects/' + timeRepport.projectId)
			.then((response) => response.json())
			.then((data) => setProject(data.name));

		const caluclateTotalTime = () => {
			const hours = Math.floor(timeRepport.minutes / 60);
			const minutes = timeRepport.minutes % 60;
			const totalTimeText = `${hours}h ${minutes}min`;
			setTotalTime(totalTimeText);
		};

		caluclateTotalTime();
	}, []);

	return (
		<tr>
			<td>{timeRepport.userId}</td>
			<td>{project}</td>
			<td>{company}</td>
			<td>{timeRepport.comment}</td>
			<td>{totalTime}</td>
			<td>{timeRepport.date}</td>
		</tr>
	);
};
