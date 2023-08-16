import { MapContainer, Polyline, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import iconStart from 'assets/icons/location-red.svg'
import iconEnd from 'assets/icons/location-blue.svg'

function Map({ gpx }) {
  const startIcon = L.icon({
    iconRetinaUrl: iconStart,
    iconUrl: iconStart,
    iconSize: [44, 64],
    iconAnchor: [22, 48]
  })

  const endIcon = L.icon({
    iconRetinaUrl: iconEnd,
    iconUrl: iconEnd,
    iconSize: [44, 64],
    iconAnchor: [22, 48]
  })

  return (
    <MapContainer
      style={{ width: '100%', height: '450px' }}
      center={gpx[0]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline pathOptions={{ color: 'blue' }} positions={gpx} />
      <Marker position={gpx[0]} icon={startIcon}>
        <Popup>
          <h5>起點</h5>
        </Popup>
      </Marker>
      <Marker position={gpx[gpx.length - 1]} icon={endIcon}>
        <Popup>
          <h5>終點</h5>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
