import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapLeaf: React.FC = () => {

  const position: [number, number] = [53.0, -1.5]; // Approximate center of the UK

  const GradientPolygonOverlay = () => {

    const map = useMap();

    React.useEffect(() => {

      // <polygon points="10,10 30,15 50,20 70,40 80,60 70,80 50,90 30,80 20,60" />

      // Create an SVG for the gradient with a polygon mask for England's shape
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>

            <linearGradient id="englandGradient" gradientTransform="rotate(80)">
              <stop offset="10%" stop-color="green" stop-opacity="1"/>
              <stop offset="20%" stop-color="green" stop-opacity="1"/>
              <stop offset="30%" stop-color="transparent" stop-opacity="1"/>
              <stop offset="40%" stop-color="transparent" stop-opacity="1"/>
              <stop offset="50%" stop-color="transparent" stop-opacity="1"/>
              <stop offset="60%" stop-color="transparent" stop-opacity="1" />
              <stop offset="70%" stop-color="transparent" stop-opacity="1" />
              <stop offset="80%" stop-color="transparent" stop-opacity="1" />
              <stop offset="90%" stop-color="transparent" stop-opacity="1" />
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
      const imageOverlay = L.imageOverlay(svgUrl, englandBounds, { opacity: 0.9 });
      imageOverlay.addTo(map);

      return () => {
        map.removeLayer(imageOverlay);
      };
    }, [map]);

    return null;
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer center={position} zoom={6} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GradientPolygonOverlay />
      </MapContainer>
    </div>
  );
};

export default MapLeaf;

