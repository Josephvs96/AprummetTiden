import React from "react";

export const Input = () => {
  const url = "http://localhost:4000/companies";

  const fetchCompanies = async () => {
    const response = await fetch(url);
    const json = await response.json();

    return json;
  };

  const [companies, setCompanies] = React.useState([]);

  React.useEffect(() => {
    fetchCompanies().then((result) => {
      setCompanies(result);
    });
  }, []);

  console.log(companies);

  return (
    <>
      <h1 className="mt-3">Time Reporting System</h1>
      <form className="container mt-5">
        <div className="form-group">
          <label className="userId mt-3" htmlFor="userId">
            User Id
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="User Id"
          />
        </div>
        <div className="form-group">
          <label className="minutes mt-3" htmlFor="minutes">
            Minutes
          </label>
          <input
            type="number"
            className="form-control"
            id="minutes"
            placeholder="Total number of minutes spent..."
          />
        </div>

        <div className="form-group">
          <label className="date mt-3" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="Enter date"
          />
        </div>
        <div className="form-group">
          <label className="comments mt-3" htmlFor="comment">
            Comments
          </label>
          <textarea
            type="text"
            className="form-control"
            id="comment"
            placeholder="Write your comment here"
          />
        </div>

        {/* Dropdown */}

        <label htmlFor="company">Choose a company:</label>
        <select name="company" id="company" className="my-5 mx-2">
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>

        <label htmlFor="project">Choose a project:</label>
        <select name="project" id="project" className="my-5 mx-2">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>

        <button className="register-btn btn btn-primary">Register</button>
      </form>
    </>
  );
};
