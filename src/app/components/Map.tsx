import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Node {
  id: number;
  name: string;
  lat: number;
  lng: number;
  noiseLevel: number; // noise level value for the node
}

interface MapProps {
  nodes: Node[];
}

const Map: React.FC<MapProps> = ({ nodes }) => {
  const mapRef = useRef<any>(null); // reference to the map instance

  // Create a custom icon for markers
  const createCustomIcon = (noiseLevel: number) => {
    let color = 'green';

    if (noiseLevel > 70) {
      color = 'red';
    } else if (noiseLevel > 40) {
      color = 'yellow';
    }

    return new L.Icon({
      iconUrl: `https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-${color}.png`,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
  };

  useEffect(() => {
    // Initialize the map
    if (mapRef.current) {
      mapRef.current.leafletElement.invalidateSize(); // Ensures the map resizes correctly
    }
  }, [nodes]);

  return (
    <MapContainer
      center={[10.3119, 123.8731]} // Center the map at Barangay Tisa
      zoom={14}
      style={{ width: '100%', height: '500px' }}
      ref={mapRef}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {nodes.map((node) => (
        <Marker
          key={node.id}
          position={[node.lat, node.lng]}
          icon={createCustomIcon(node.noiseLevel)}
        >
          <Popup>
            <h3>{node.name}</h3>
            <p>Noise Level: {node.noiseLevel} dB</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
