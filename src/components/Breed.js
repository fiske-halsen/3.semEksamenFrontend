import { useParams } from "react-router-dom";
import facade from "../utils/apiFacade";
import React, { useState, useEffect } from "react";

const Breed = () => {
  let { breed } = useParams();

  let breedDetailObj = {
    breed: "",
    info: "",
    wikipedia: "",
    image: "",
    facts: [],
    success: "",
  };

  const [breedDetail, setBreedDetail] = useState(breedDetailObj);

  useEffect(() => {
    facade
      .fetchDetailAboutBreed(breed)
      .then((breedDetail) => setBreedDetail(breedDetail));

    /*Ovenstående trigger et search, så vi sender det tilbage til vores API
     Info teksten er for lang på nogle af dem til data basen exception
     Tomme objekter bliver nogle gange sat in i databasen, skyldes at 
     værdierne på obj nogle gange er null
    
    let searchObj = { name: breedDetail.breed, info: breedDetail.info };
    console.log(searchObj);
    facade.addSearch(searchObj);
    setBreedDetail(breedDetailObj);
     */
  }, [breed]);

  useEffect(() => {}, [breedDetail]);

  return (
    <div>
      <h3 className="text-center my-5 font-weight-bold">
        {" "}
        Details about: <b>{breedDetail.breed}</b>
      </h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Dog name</th>
            <th scope="col"> Date of birth</th>
            <th scope="col">Dog info</th>
            <th scope="col">Dog breed</th>
            <th scope="col">Succes</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          <tr>
            <td>{breedDetail.breed}</td>
            <td>{breedDetail.info}</td>
            <td>
              <a href={breedDetail.image}> {breedDetail.image} </a>
            </td>
            <td>{breedDetail.facts.map((fact) => fact).join(" ,")}</td>
            <td>{breedDetail.success.toString()} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Breed;
