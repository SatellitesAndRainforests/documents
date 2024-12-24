import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapLeaf: React.FC = () => {
  const position: [number, number] = [51.505, -0.09]; // Coordinates for London

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer
        center={position as [number, number]} // Explicitly type the position
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default MapLeaf;

