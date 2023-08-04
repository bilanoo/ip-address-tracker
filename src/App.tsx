import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";

function App() {
  return (
    <>
      <div className="all-content-container">
        <div className="ip-address-container">
          <h1>IP Address Tracker</h1>
        </div>
        <div className="ip-maps-main-container" id="map">
          <MapContainer
            style={{ height: "100vh" }}
            center={[51.505, -0.09]}
            zoom={13}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                <span>
                  A pretty CSS3 popup.
                  <br />
                  Easily customizable.
                </span>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default App;
