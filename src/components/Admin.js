import facade from "../utils/apiFacade";
import React, { useState, useEffect } from "react";

const Admin = () => {
  let breedObj = { dogs: [{ breed: "" }] };

  const [allBreeds, setAllBreeds] = useState(breedObj);
  const [searchCountByBreed, setSearchCountByBreed] = useState({ count: 0 });
  const [totalSearchCount, setTotalSearchCount] = useState({ count: "" });
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    facade.fetchAllBreeds().then((dogs) => setAllBreeds(dogs));
    facade.fetchTotalSearches().then((count) => setTotalSearchCount(count));
  }, []);

  useEffect(() => {
    facade
      .fetchTotalSearchesByBreed(selectedBreed)
      .then((data) => setSearchCountByBreed(data));
  }, [selectedBreed]);

  const onChange = (evt) => {
    evt.preventDefault();
    setSelectedBreed(evt.target.value);
  };

  const options = allBreeds.dogs.map((dog) => (
    <option value={dog.breed}>{dog.breed}</option>
  ));

  return (
    <div>
      <form>
        <div class="form-row align-items-center">
          <div class="col-auto my-1">
            <label class="mr-sm-2 mt-3 mb-3" for="inlineFormCustomSelect">
              Pick a breed you wanna see total searches off:
            </label>
            <select
              class="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
              value={selectedBreed}
              onChange={onChange}
            >
              {options}
            </select>
          </div>
          <div class="col-auto my-1"></div>
        </div>
        <div class="col-auto my-1"></div>
      </form>
      <h1 className="my-5">
        {" "}
        Total searches for this breed: {searchCountByBreed.count}
      </h1>
      <br></br>
      <h1> Total searches for all breeds: {totalSearchCount.count} </h1>
    </div>
  );
};

export default Admin;
