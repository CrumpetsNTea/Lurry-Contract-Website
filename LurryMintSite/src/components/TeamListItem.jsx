import React from 'react';
import '../styles/TeamListItem.css';
import Footer from './Footer';
import iouriteam from '../images/iouriteam.jpg';


function TeamListItem() {

  return (
    <>
    <div className="card">
      <div className="card-body">
        <img src={iouriteam} alt="iouri" className="card-image"/>
        <h2 className="card-title">Iouri Volkov</h2>
        <p className="card-description">Design and Front-end lead</p>
      </div>
    </div>
    </>
  )
}

export default TeamListItem;