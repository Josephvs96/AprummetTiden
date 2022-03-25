import { useState, useEffect } from "react";
import TotalTimeTable from "./Components/TimeTable/TotalTimeTable";
import { Input } from "./Components/Input";
function App() {
  const [timeReports, setTimeReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/timeReport")
      .then((response) => response.json())
      .then((data) => setTimeReports(data));
  }, []);

  const handleAddTimeReport = (timeReport) => {
    // Post to the API

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
