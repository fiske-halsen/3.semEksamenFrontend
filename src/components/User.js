import "bootstrap/dist/css/bootstrap.min.css";
import facade from "../utils/apiFacade";
import React, { useState, useEffect } from "react";
import TableUserDogs from "./TableUserDogs.js";

const User = () => {
  let obj = {
    name: "",
    dateOfBirth: "",
    info: "",
    breed: "",
  };

  const [dog, setDog] = useState(obj);
  const [reloadTable, setReloadTable] = useState(false);

  const onChange = (evt) => {
    setDog({ ...dog, [evt.target.id]: evt.target.value });
    console.log(dog);
  };

  const onClick = (evt) => {
    evt.preventDefault();
    facade.postDog(dog);
    setDog({ ...obj });
    setReloadTable(true);
  };

  return (
    <div>
      <div>
        <TableUserDogs
          reloadTable={reloadTable}
          setReloadTable={setReloadTable}
        />
      </div>

      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form className="form-horizontal">
            <div className="form-group">
              <label className="control-label col-sm-3" htmlFor="name">
                Name:
              </label>
              <div className="col-sm-5">
                <input
                  className="form-control sm"
                  id="name"
                  placeholder="Enter name of your dog"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3" htmlFor="dateofbirth">
                Enter Date of birth:
              </label>
              <div className="col-sm-5">
                <input
                  className="form-control"
                  id="dateOfBirth"
                  placeholder="dd/mm/yy"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3" htmlFor="info">
                Enter Info:
              </label>
              <div className="col-sm-5">
                <input
                  className="form-control"
                  id="info"
                  placeholder="info"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-3" htmlFor="Breed">
                Enter Breed:
              </label>
              <div className="col-sm-5">
                <input
                  className="form-control"
                  id="breed"
                  placeholder="Breed"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-offset-3 col-sm-9">
                <button
                  onClick={onClick}
                  type="submit"
                  className="btn btn-primary"
                >
                  Add Dog
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-4"></div>
    </div>
  );
};

export default User;
