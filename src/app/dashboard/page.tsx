'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const position: [number, number] = [10.3026, 123.8886]; // Example: Cebu City

export default function DashboardPage() {
  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={L.icon({ iconUrl: '/marker-icon.png', iconSize: [25, 41], iconAnchor: [12, 41] })}>
          <Popup>
            Sitio Tahoma<br />Noise Peak: 85 dB
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
