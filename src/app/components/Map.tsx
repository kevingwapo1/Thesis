import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet styles
import React from 'react';

// Noise Levels and Colors
const noiseLevels = [
  { label: 'Very Quiet', color: 'lightgreen', range: '0–30 dB' },
  { label: 'Quiet', color: 'lightblue', range: '31–40 dB' },
  { label: 'Moderate', color: 'yellow', range: '41–55 dB' },
  { label: 'Loud', color: 'orange', range: '56–70 dB' },
  { label: 'Very Loud', color: 'red', range: '71–85 dB' },
  { label: 'Extremely Loud', color: 'darkred', range: '86–100 dB' },
  { label: 'Painful', color: 'purple', range: '101–120+ dB' },
];

const Map: React.FC<{ nodes: any[] }> = ({ nodes }) => {
  return (
    <MapContainer center={[10.3120, 123.8732]} zoom={13} style={{ height: '100%', width: '100%', position:'fixed'}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {nodes.map((node) => {
        const level = noiseLevels.find((level) => level.label === node.noiseLevel);
        const position: LatLngExpression = [node.lat, node.lng];

        return (
          <Marker key={node.id} position={position}>
            <Popup>
              <div>
                <h3>{node.name}</h3>
                <p>Noise Peak: {node.noiseLevel} dB</p>
                <p>
                  <span
                    style={{
                      backgroundColor: level?.color,
                      color: 'white',
                      padding: '4px',
                      borderRadius: '4px',
                    }}
                  >
                    {level?.label} ({level?.range})
                  </span>
                </p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
