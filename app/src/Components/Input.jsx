import React from "react";

export const Input = (props) => {
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

  const url2 = "http://localhost:4000/projects";

  const fetchProjects = async () => {
    const response = await fetch(url2);
    const json = await response.json();

    return json;
  };

  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    fetchProjects().then((result) => {
      setProjects(result);
    });
  }, []);

  const [userId, setUserId] = React.useState("");
  const [minutes, setMinutes] = React.useState(0);
  const [date, setDate] = React.useState();
  const [comment, setComments] = React.useState();
  const [companyId, setCompany] = React.useState();
  const [projectId, setProject] = React.useState();

  function registerTime() {
    const timeToPost = {
      userId,
      minutes,
      date,
      comment,
      companyId,
      projectId,
    };
    props.onAddTimeReport(timeToPost);
  }

  return (
    <>
      <h1 className="mt-3 text-center">Time Reporting System</h1>
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
            onChange={(e) => setUserId(e.target.value)}
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
            onChange={(e) => setMinutes(e.target.value)}
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
            onChange={(e) => setDate(e.target.value)}
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
            onChange={(e) => setComments(e.target.value)}
          />
        </div>

        {/* Dropdown */}
        <div className="d-flex justify-content-between gap-5">
          <select
            name="company"
            id="company"
            className="form-control my-5"
            onChange={(e) => setCompany(e.target.value)}
          >
            <option>Choose a company</option>
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>

          <select
            name="project"
            id="project"
            className="form-control my-5"
            onChange={(e) => setProject(e.target.value)}
          >
            <option>Choose a project</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>
      </form>
      <button
        className="register-btn btn btn-primary container w-25 mb-5"
        onClick={registerTime}
      >
        Register Baby!
      </button>
    </>
  );
};
