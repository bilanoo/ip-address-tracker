import "./SearchIpOrDomain.css";

export const SearchIpOrDomain = () => {
  return (
    <div className="search-container">
      <input
        placeholder="Search for any IP address or domain"
        className="search-input"
      />
      <button className="search-button">
        <img src="images/icon-arrow.svg" />
      </button>
    </div>
  );
};
