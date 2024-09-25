import React from 'react';

const req = require.context('../assets/icons', true, /\.svg$/);

const CustomIcon = ({ name = 'icon_go', color = 'black', height = 24, width = 'auto' }) => {
  const iconPath = req(`./${name}.svg`); 
  if (!iconPath) {
    return <span>Icono no encontrado</span>; 
  }

  return (
    <img
      src={iconPath}
      alt={name}
      className='inline-block'
      style={{ fill: color, width: width, height: height }}
    />
  );
};

export default CustomIcon;
