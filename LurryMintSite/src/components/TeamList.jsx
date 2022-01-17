import React from 'react';
import TeamListItems from './TeamListItem';
import '../styles/TeamList.css';


function TeamList() {

  return (
    <div className="team-page">
      <h1 className="team-header">TEAM</h1>
         <TeamListItems />
    </div>
  )
}

export default TeamList;

