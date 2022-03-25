import { useState, useEffect } from "react";
import TotalTimeTable from "./Components/TimeTable/TotalTimeTable";

function App() {
  const [timeReports, setTimeReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/timeReport")
      .then((response) => response.json())
      .then((data) => setTimeReports(data));
  }, []);

  const handleAddTimeReport = (timeReport) => {
    // Post to the API

    setTimeReports((state) => {
      //return [...state, timeReport];
      return state.push(timeReport);
    });
  };

  return (
    <div>
      <Input />
      <TotalTimeTable timeReports={timeReports} />
    </div>
  );
}

export default App;
