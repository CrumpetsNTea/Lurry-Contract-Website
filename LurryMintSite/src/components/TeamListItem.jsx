import React from 'react';
import '../styles/TeamListItem.css';
import Footer from './Footer';
import iouriteam from '../images/iouriteam.jpg';
import connor from '../images/connor.jpg';


function TeamListItem(props) {

  return (
    <>
    <div className="card">
      <div className="card-body">
        <img src={iouriteam} alt="iouri" className="card-image"/>
        <h2 className="card-title">Iouri Volkov</h2>
        <p className="card-description">Full-stack dev</p>
      </div>

      <div className="card-body">
        <img src={connor} alt="connor" className="card-image"/>
        <h2 className="card-title">Connor Hughes</h2>
        <p className="card-description">Full-stack Dev</p>
      </div>

      <div className="card-body">
        <img src={iouriteam} alt="iouri" className="card-image"/>
        <h2 className="card-title">Tobias Botell</h2>
        <p className="card-description">Full-stack Dev</p>
      </div>


    </div>
    </>
  )
}

export default TeamListItem;