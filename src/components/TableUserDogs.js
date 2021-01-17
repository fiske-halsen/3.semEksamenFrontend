import facade from "../utils/apiFacade";
import React, { useState, useEffect } from "react";
const TableUserDog = ({ reloadTable, setReloadTable }) => {
  let userDogs = {
    dogs: [
      {
        name: "",
        dateOfBirth: "",
        info: "",
        breed: "",
      },
    ],
  };

  const [dataFromServer, setDataFromServer] = useState(userDogs);

  useEffect(() => {
    facade.fetchAllDogsByUser().then((data) => setDataFromServer(data));
    setReloadTable(false);
  }, [reloadTable]);

  const tableItems = dataFromServer.dogs.map((data, index) => (
    <tr key={index}>
      <td>{data.name}</td>
      <td>{data.dateOfBirth}</td>
      <td>{data.info}</td>
      <td>{data.breed}</td>
    </tr>
  ));

  return (
    <div>
      <h3 className="text-center my-5 font-weight-bold">
        {" "}
        A list of your dogs
      </h3>
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
