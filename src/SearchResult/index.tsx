import "./SearchResult.css";

export const SearchResult = () => {
  return (
    <div className="search-result-container">
      <div className="each-information-container">
        <p className="information title">IP ADDRESS</p>
        <p className="information result">192.212.174.101</p>
      </div>
      <div className="each-information-container">
        <p className="information title">LOCATION</p>
        <p className="information result">Brooklyn, NY 10001</p>
      </div>
      <div className="each-information-container">
        <p className="information title">TIMEZONE</p>
        <p className="information result">UTC -05:00</p>
      </div>
      <div className="each-information-container">
        <p className="information title">ISP</p>
        <p className="information result">SpaceX Starlink</p>
      </div>
    </div>
  );
};
