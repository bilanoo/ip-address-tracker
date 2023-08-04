import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";
import { SearchIpOrDomain } from "./SearchIpOrDomain";

function App() {
  return (
    <>
      <div className="ip-address-container">
        <h1 style={{ padding: "0", fontSize: "25px" }}>IP Address Tracker</h1>

        <SearchIpOrDomain />
      </div>
      <div className="ip-maps-main-container" id="map">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={16}
          style={{ height: "100%" }}
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
    </>
  );
}

export default App;
