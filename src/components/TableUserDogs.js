import facade from "../utils/apiFacade";
import React, { useState, useEffect } from "react";
const TableUserDog = ({ reloadTable, setReloadTable, setEditDogObj }) => {
  let userDogs = {
    dogs: [
      {
        id: "",
        name: "",
        dateOfBirth: "",
        info: "",
        breed: "",
      },
    ],
  };

  const [listOfDogs, setListOfDogs] = useState(userDogs);

  useEffect(() => {
    facade.fetchAllDogsByUser().then((dogs) => setListOfDogs(dogs));
    setReloadTable(false);
  }, [reloadTable]);

  const deleteDog = (evt) => {
    evt.preventDefault();
    let dogId = evt.target.id;
    facade.deleteDog(dogId);
    setReloadTable(true);
  };

  const findDogToEdit = (evt) => {
    evt.preventDefault();
    let dogId = evt.target.id;
    console.log(dogId);
    listOfDogs.dogs.forEach((dog) => {
      if (dog.id == dogId) {
        setEditDogObj({ ...dog, id: dog.id });
      }
    });
  };

  const tableItems = listOfDogs.dogs.map((dog, index) => (
    <tr key={index}>
      <td>{dog.name}</td>
      <td>{dog.dateOfBirth}</td>
      <td>{dog.info}</td>
      <td>{dog.breed}</td>

      <button
        id={dog.id}
        onClick={deleteDog}
        type="submit"
        className="btn btn-primary"
      >
        {" "}
        Delete{" "}
      </button>
      <button
        id={dog.id}
        onClick={findDogToEdit}
        type="submit"
        className="btn btn-primary"
      >
        {" "}
        Edit{" "}
      </button>
    </tr>
  ));

  return (
    <div>
      <h2 className="text-center my-5 font-weight-bold">
        {" "}
        A list of your dogs
      </h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Dog name</th>
            <th scope="col"> Date of birth</th>
            <th scope="col">Dog info</th>
            <th scope="col">Dog breed</th>
          </tr>
        </thead>
        <tbody> {tableItems}</tbody>
      </table>
    </div>
  );
};

export default TableUserDog;
