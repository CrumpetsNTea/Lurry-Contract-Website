import React from 'react';
import TeamListItems from './TeamListItem';
import '../styles/TeamList.css';

function TeamList() {

  return (
    <div>
      <h1 className="team-header">Meet the Team</h1>
    <TeamListItems />
    </div>
  )
}

export default TeamList;

