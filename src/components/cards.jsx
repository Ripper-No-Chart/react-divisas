import React from "react";

const Cards = ({ props }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {props.map(({ casa }, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card my-4 rounded">
                <div className="card-title pt-3">
                  <h3 className="text-white text-center">{casa.nombre}</h3>
                </div>
                <div className="card-body text-center">
                  <h5>
                    Compra <h4 className="text-white">{casa.compra}</h4>
                  </h5>
                  <h5>
                    Venta <h4 className="text-white">{casa.venta}</h4>
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
