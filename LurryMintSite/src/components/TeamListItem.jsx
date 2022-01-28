import React from "react";
import "../styles/TeamListItem.css";
import iouriteam from "../images/iouriteam.jpg";
import connor from "../images/connor.jpg";

function TeamListItems() {
  return (
    <>
      <div className="team-cards">
        <div className="card-body">
          <img src={iouriteam} alt="iouri" className="card-image" />
          <h2 className="card-title">Iouri Volkov</h2>
        </div>
        <div className="card-body">
          <img src={connor} alt="connor" className="card-image" />
          <h2 className="card-title">Sean Hughes</h2>
        </div>
        <div className="card-body">
          <img
            src="https://ca.slack-edge.com/T2G8TE2E5-U02JDMLUAAZ-c13c399b7009-512"
            alt="tobias"
            className="card-image"
          />
          <h2 className="card-title">Tobias Botell</h2>
        </div>
      </div>
    </>
  );
}

export default TeamListItems;
