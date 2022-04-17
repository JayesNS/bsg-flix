import React from 'react';

interface LogoProps {
  style?: Pick<React.CSSProperties, 'height' | 'width' | 'color'>
}

export const Logo = ({
  style: {
    width = '64px',
    height = '64px',
    color = '#dd1d1d'
  } = {}
}: LogoProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 500 500" fill={color}>
    <defs>
    </defs>
    <g transform="matrix(0.49 0.96 1.8 -0.91 247.14 202.88)">
      <polygon style={{filter: 'brightness(0.7)'}} points="-25,-50 -50,50 25,50 50,-50 " />
    </g>
    <g transform="matrix(0.32 1.03 1.83 -0.57 282.16 390.3)">
      <polygon style={{filter: 'brightness(0.7)'}} points="-25,-50 -50,50 25,50 50,-50 " />
    </g>
    <g transform="matrix(-0.45 0.98 1.91 0.88 262.38 114.6)">
      <polygon style={{filter: 'brightness(0.85)'}} points="-25,-50 -50,50 25,50 50,-50 " />
    </g>
    <g transform="matrix(-0.45 0.98 2.51 1.15 266.74 306.54)">
      <polygon style={{filter: 'brightness(0.85)'}} points="-25,-50 -50,50 25,50 50,-50 " />
    </g>
    <g transform="matrix(-1.2 0 0 4.25 150.17 258.05)">
      <polygon points="-25,-50 -50,50 25,50 50,-50 " />
    </g>
  </svg>
);
