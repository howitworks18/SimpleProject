import React from 'react';
import Map from './maps.svg';
import Cal from './cal.svg';
import Settings from './settings.svg';

const SVGhelper = ({svg, height, width}) => {
  const sizeHeight = height || 30;
  let sizeWidth = width || 30;
  const mapIcon = <Map height={sizeHeight} width={sizeWidth} />
  const calIcon = <Cal height={sizeHeight} width={sizeWidth} />
  const settingsIcon = <Settings height={sizeHeight} width={sizeWidth}  />

  switch(svg){
    case 'mapIcon':
      return  mapIcon
    case 'calIcon':
      return calIcon
    case 'settingsIcon':
      return settingsIcon
    default:
      return null
   }
};

export default SVGhelper;
