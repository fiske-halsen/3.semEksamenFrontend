import "bootstrap/dist/css/bootstrap.min.css";
import facade from "../utils/apiFacade";
import React, { useState, useEffect } from "react";
import TableUserDogs from "./TableUserDogs.js";
import AddDog from "./AddDog.js";
import EditDog from "./EditDog.js";

const User = () => {
  let dogObj = {
    id: "",
    name: "",
    dateOfBirth: "",
    info: "",
    breed: "",
  };
  const [editDogObj, setEditDogObj] = useState(dogObj);

  const [reloadTable, setReloadTable] = useState(false);

  return (
    <div>
      <div>
        <TableUserDogs
          reloadTable={reloadTable}
          setReloadTable={setReloadTable}
          setEditDogObj={setEditDogObj}
        />
      </div>

      <AddDog setReloadTable={setReloadTable} />

      <EditDog setReloadTable={setReloadTable} editDogObj={editDogObj} />
    </div>
  );
};

export default User;
