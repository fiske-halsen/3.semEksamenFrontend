import facade from "../utils/apiFacade";
import React, { useState, useEffect } from "react";
const TableUserDog = () => {
  let obj = {
    peopleName: "",
    planetName: "",
    speciesName: "",
    starshipName: "",
    vehicleName: "",
  };

  const [dataFromServer, setDataFromServer] = useState(obj);

  useEffect(() => {
    facade.fetchStarwars().then((data) => setDataFromServer(data));
  }, []);

  return (
    <div>
      <p>people: {dataFromServer.peopleName}</p>
      <p>planet: {dataFromServer.planetName}</p>
      <p>species: {dataFromServer.speciesName}</p>
      <p>starship: {dataFromServer.starshipName}</p>
      <p>vehicle: {dataFromServer.vehicleName}</p>
    </div>
  );
};

export default Starwars;
