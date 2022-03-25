import React from "react";

export const Input = () => {
  return (
    <>
      <h1 className="mt-3">Time Reporting System</h1>
      <form className="container mt-5">
        <div className="form-group">
          <label className="userId mt-3" for="userId">
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
          <label className="minutes mt-3" for="minutes">
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
          <label className="date mt-3" for="date">
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
          <label className="comments mt-3" for="comment">
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

        <label for="company">Choose a company:</label>
        <select name="company" id="company" className="my-5 mx-2">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>

        <label for="project">Choose a project:</label>
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
