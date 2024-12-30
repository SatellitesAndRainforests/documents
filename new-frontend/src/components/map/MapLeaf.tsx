import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import EquatorOverlay from './EquatorOverlay';

const MapLeaf: React.FC = () => {

  const position: [number, number] = [53.0, -1.5]; // Approximate center of the UK
  const zoom = 6;

  const [gradientStop, setGradientStop] = useState(32);
  const [gradientRotation, setGradientRotation] = useState(44);
  const [gradientStep, setGradientStep] = useState(1);

  const generateGradientStops = (stopValue: number) => {
    const stops = [];
    for (let i = 10; i <= 90; i += gradientStep) {
      const color = i <= stopValue ? 'green' : 'transparent';
      stops.push(`<stop offset="${i}%" stop-color="${color}" stop-opacity="1"/>`);
    }
    return stops.join('\n'); // Join the array into a single string
  };

  const GradientPolygonOverlay = () => {

    const map = useMap();

    React.useEffect(() => {

      const stops = generateGradientStops(gradientStop);

      // Create an SVG for the gradient with a polygon mask for England's shape
      const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>

      <linearGradient id="englandGradient" gradientTransform="rotate(${gradientRotation})">
      ${stops}
      </linearGradient>

      <clipPath id="clipPolygon">   
      <polygon points="28,40 45,22 55,44 65,50 70,75 85,80 85,90 75,102
      80,102 85,110 65,120 35,120 20,130 0,130 30,100
      32,70 33,57 25,48" />
      </clipPath>

      </defs>
      <rect x="0" y="0" width="200" height="200" fill="url(#englandGradient)" clip-path="url(#clipPolygon)" />
      </svg>
      `;
      // x , y

      // Convert the SVG to a data URL
      const svgUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

      // Define approximate bounds for the shape
      const englandBounds: L.LatLngBoundsExpression = [
        [62.0, -6.0], // Top-left (Scotland border area)
        [45.0, 3.0],  // Bottom-right (southeast England)
      ];

      // Add the image overlay to the map
      const imageOverlay = L.imageOverlay(svgUrl, englandBounds, { opacity: 0.7 });
      imageOverlay.addTo(map);

      return () => {
        map.removeLayer(imageOverlay);
      };
    }, [map]);

    return null;
  };

  return (
    <div style={{ height: '600px', width: '100%' }}>

    <div style={{ marginBottom: '10px'}}>

    <h1> Where is the North ? </h1>

    <label>
    Gradient stop (%):
      <input 
    type="range"
    min="10"
    max="80"
    value={gradientStop}
    onChange={ (e) => setGradientStop(Number(e.target.value)) }
    />
    {gradientStop}%
    </label>
    <br />
    <label>
    Gradient Rotation (°):
      <input
    type="range"
    min="40"
    max="120"
    value={gradientRotation}
    onChange={ (e) => setGradientRotation(Number(e.target.value)) }
    />
    {gradientRotation}°
    </label>
    <br />
    <label>
    Gradient Step:
      <input
    type="range"
    min="1"
    max="20"
    value={gradientStep}
    onChange={ (e) => setGradientStep(Number(e.target.value)) }
    />
    {gradientStep}
    </label>

    </div>

    <MapContainer center={position} zoom={zoom} style={{ height: '100%', width: '100%' }}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    <GradientPolygonOverlay />
    <EquatorOverlay />
    </MapContainer>
    </div>
  );
};

export default MapLeaf;

