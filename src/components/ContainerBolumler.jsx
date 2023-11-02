import React from "react";
import { useState, useEffect } from "react";
import * as bootstrap from "bootstrap";

const ContainerBolumler = () => {
  const [rickData, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
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
                <div className="card2">
                  <a href="/">
                    <h1 className="uppercase cardheader">
                      Bölüm {name.id} <br />
                      {name.name}
                    </h1>

                    <div className="content">
                      <h2 className="fw-bold">Tarih: {name.air_date}</h2>

                      <h2 className="fw-bold">Bölüm: {name.episode}</h2>
                    </div>
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default ContainerBolumler;
