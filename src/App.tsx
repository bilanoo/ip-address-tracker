import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "./App.css";
import { SearchIpOrDomain } from "./SearchIpOrDomain";
import { SearchResult } from "./SearchResult";
import { GetIpOrDomainService } from "./services/GetIpOrDomainService";
import { useEffect, useState } from "react";
import MarkerIcon from "./assets/images/icon-location.svg";
import L from "leaflet";

function App() {
  const [searchedAddress, setSearchAddress] = useState("");

  const { data, isLoading, refetch } = GetIpOrDomainService({
    searchedAddress,
  });

  const newicon = new L.Icon({
    iconUrl: MarkerIcon, // require the path to the asset
  });

  useEffect(() => {
    // Fetch data once on page load
    refetch();
  }, [refetch]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function ChangeView({ center, zoom }: any) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  return (
    <>
      <div className="ip-address-container">
        <h1 style={{ padding: "0", fontSize: "25px" }}>IP Address Tracker</h1>

        <SearchIpOrDomain
          searchedAddress={searchedAddress}
          setSearchedAddress={setSearchAddress}
          refetch={refetch}
        />
      </div>
      <div className="ip-maps-main-container" id="map">
        {data && (
          <MapContainer
            center={data ? [data.latitude, data.longitude] : [51.505, -0.09]}
            zoom={13}
            style={{ height: "100%" }}
            zoomControl={false}
            attributionControl={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <ChangeView
              center={data ? [data.latitude, data.longitude] : [51.505, -0.09]}
              zoom={13}
            />
            <Marker
              position={
                data ? [data.latitude, data.longitude] : [51.505, -0.09]
              }
              icon={newicon}
            >
              <Popup>
                <span>This is a rough estimate of the location.</span>
              </Popup>
            </Marker>
          </MapContainer>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!isLoading && <SearchResult data={data} />}
        </div>
        <footer className="footer-notes">
          <p
            style={{
              color: "black",
              margin: "0",
              marginBottom: "2px",
              textAlign: "center",
            }}
          >
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0"
              className="hyperlink"
            >
              Frontend Mentor
            </a>{" "}
            coded by{" "}
            <a
              href="https://github.com/bilanoo/ip-address-tracket"
              className="hyperlink"
            >
              Bilal
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
