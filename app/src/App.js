import { useState, useEffect } from "react";
import TotalTimeTable from "./Components/TimeTable/TotalTimeTable";
import { Input } from "./Components/Input";

function addTimeReport(timeReport) {
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(timeReport)
  };
  fetch('http://localhost:4000/timeReport', requestOptions)
      
      
}

function App() {
  const [timeReports, setTimeReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/timeReport")
      .then((response) => response.json())
      .then((data) => setTimeReports(data));
  }, []);

  const handleAddTimeReport = (timeReport) => {
    // Post to the API
    addTimeReport(timeReport)

    setTimeReports((prevState) => {
      return [...prevState, timeReport];
    });
  };

  return (
    <div>
      <Input onAddTimeReport={handleAddTimeReport} />
      <TotalTimeTable timeReports={timeReports} />
    </div>
  );
}

export default App;
