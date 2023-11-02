import React from "react";
import { useState, useEffect } from "react";
import * as bootstrap from "bootstrap";

const ContainerKarakterler = () => {
  const [rickData, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  });

  return (
    <div className="App">
      <>
        <div key={rickData.id} className="container">
          {rickData.map((name) => {
            return (
              <>
                <div className="card">
                  <h1 className="uppercase cardheader">{name.name}</h1>
                  <img src={name.image} alt="" className="centerimg" />

                  <div className="content">
                    <h2 className="fw-bold">Cinsiyet: {name.gender}</h2>

                    <h2 className="fw-bold">Konum: {name.location.name}</h2>

                    <h2 className="fw-bold">Türü: {name.species}</h2>

                    <h className="fw-bold">Nereden: {name.origin.name}</h>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default ContainerKarakterler;
