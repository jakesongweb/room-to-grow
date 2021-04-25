// import React, { useState } from 'react';
import React from 'react';
import Button from "@material-ui/core/Grid";

const FamilyList = props => {
  const { selectedGeoState } = props;
  const { familiesData } = props;
  const { setSelectedFamily } = props;
  const { setSelectedPlant } = props;

  // this is wrong- have to render nothing at first
  // and then only update once the state is selected
  // and re-render every time the family changes
  // is this an effect????
  if (selectedGeoState === null) return (<div></div>)
  else return (
    <ul>
      {familiesData.map(family => {
        <li>
          <Button onClick={() => {
            setSelectedFamily(family.name)
            setSelectedPlant(null);
          }}>
            familiesData.name
          </Button>
        </li>
      })}
    </ul>
  );
}

export default FamilyList;