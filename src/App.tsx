import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";
import { SearchIpOrDomain } from "./SearchIpOrDomain";
import { SearchResult } from "./SearchResult";
import { GetIpOrDomainService } from "./services/GetIpOrDomainService";
import { useEffect, useState } from "react";

function App() {
  const [searchedAddress, setSearchAddress] = useState("");

  const { data, isLoading, refetch } = GetIpOrDomainService({
    searchedAddress,
  });

  useEffect(() => {
    // Fetch data once on page load
    refetch();
  }, [refetch]);

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
            center={
              !isLoading ? [data.latitude, data.longitude] : [51.505, -0.09]
            }
            zoom={16}
            style={{ height: "100%" }}
            zoomControl={false}
            attributionControl={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={
                !isLoading ? [data.latitude, data.longitude] : [51.505, -0.09]
              }
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
      </div>
    </>
  );
}

export default App;
