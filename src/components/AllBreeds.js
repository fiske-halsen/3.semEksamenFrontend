import "bootstrap/dist/css/bootstrap.min.css";
import facade from "../utils/apiFacade";
import Breed from "./Breed.js";
import React, { useState, useEffect } from "react";
import {
  NavLink,
  Route,
  useParams,
  useRouteMatch,
  Switch,
} from "react-router-dom";

const AllBreeds = () => {
  let breedObj = { dogs: [{ breed: "" }] };

  const [allBreeds, setAllBreeds] = useState(breedObj);
  const { path, url } = useRouteMatch();

  useEffect(() => {
    facade.fetchAllBreeds().then((dogs) => setAllBreeds(dogs));
  }, []);

  const tableItems = allBreeds.dogs.map((dog, index) => (
    <tr key={index}>
      <td>{dog.breed}</td>
      <td>
        <button id={dog.breed}>
          {" "}
          <NavLink to={`${url}/${dog.breed}`}>
            {" "}
            Info om: {dog.breed}{" "}
          </NavLink>{" "}
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <Switch>
        <Route path={`${path}/:breed`}>
          <Breed />
        </Route>
        <Route exact path={path}>
          {" "}
          <h2 className="text-center my-5 font-weight-bold">
            {" "}
            List of all breeds
          </h2>
          <div className="row ">
            <div className="col-4"></div>
            <div className="col-4">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Dog name</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody> {tableItems}</tbody>
              </table>
            </div>
            <div className="col-4"></div>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default AllBreeds;
