import "bootstrap/dist/css/bootstrap.min.css";
import facade from "../utils/apiFacade";
import React, { useState, useEffect } from "react";

const EditDog = ({ setReloadTable, editDogObj }) => {
  let obj = {
    id: editDogObj.id,
    name: editDogObj.name,
    dateOfBirth: editDogObj.dateOfBirth,
    info: editDogObj.info,
    breed: editDogObj.breed,
  };

  const [dogToEdit, setDogToEdit] = useState(editDogObj);

  const onChange = (evt) => {
    setDogToEdit({ ...editDogObj, [evt.target.id]: evt.target.value });

    console.log(editDogObj);
    console.log(dogToEdit);
  };

  const editDog = (evt) => {
    evt.preventDefault();
    facade.editDog(dogToEdit);
    setReloadTable(true);
  };

  return (
    <div>
      {" "}
      <form className="form-horizontal">
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-5">
            <input
              className="form-control sm"
              id="name"
              placeholder={dogToEdit.name}
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
              placeholder={dogToEdit.dateOfBirth}
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
              placeholder={dogToEdit.info}
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
              placeholder={dogToEdit.breed}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button onClick={editDog} type="submit" className="btn btn-primary">
              Edit dog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditDog;
