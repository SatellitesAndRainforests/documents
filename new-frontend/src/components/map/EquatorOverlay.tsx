import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const EquatorOverlay = () => {

  const map = useMap();

  const latLines: L.Polyline[] = [];
  const lonLines: L.Polyline[] = [];

  const orbit: [number, number][] = [];

  React.useEffect(() => {

    const equator = L.polyline([[0,-180],[0,180]],{color:'blue',weight:2,dashArray:'4 4'});
    const cancer = L.polyline([[23.5,-180],[23.5,180]],{color:'red',weight: 1,dashArray:'4 10'});
    const capricorn = L.polyline([[-23.5,-180],[-23.5,180]],{color:'red',weight:1,dashArray:'4 10'});

    const arctic = L.polyline([[66.5,-180],[66.5,180]],{color:'grey',weight:1,dashArray:'4 4'});
    const antarctic = L.polyline([[-66.5,-180],[-66.5,180]],{color:'grey',weight:1,dashArray:'4 4'});

    for ( let lat = -90; lat <= 90; lat += 10) {
      latLines.push( L.polyline([[lat,-180],[lat,180]],{color:'blue',weight:1,dashArray:'1 10'}));
    }
    for ( let lon = -180; lon <= 180; lon += 10) {
      lonLines.push( L.polyline([[90,lon],[-90,lon]],{color:'blue',weight:1,dashArray:'1 10'}));
    }

    for (let lon = -180; lon <= 180; lon += 2) {
      const lat = 30 * Math.sin((lon * Math.PI) / 180); // Sine wave pattern
      orbit.push([lat, lon]);
    }

    const orbitLine = L.polyline(orbit, { color: 'red', weight: 1});
    orbitLine.addTo(map);

    equator.addTo(map);
    cancer.addTo(map);
    capricorn.addTo(map);
    arctic.addTo(map);
    antarctic.addTo(map);

    latLines.forEach((line) => line.addTo(map));
    lonLines.forEach((line) => line.addTo(map));

    orbitLine.addTo(map);

    return () => {
      map.removeLayer(equator);
      map.removeLayer(cancer);
      map.removeLayer(capricorn);
      map.removeLayer(arctic);
      map.removeLayer(antarctic);

      latLines.forEach((line) => map.removeLayer(line));
      lonLines.forEach((line) => map.removeLayer(line));

      map.removeLayer(orbitLine);

    }

  }, [map]);

  return null;

};

export default EquatorOverlay;

