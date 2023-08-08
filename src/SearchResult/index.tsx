import "./SearchResult.css";
interface SearchResultProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}
export const SearchResult = ({ data }: SearchResultProps) => {
  return (
    <div className="search-result-container">
      <div className="each-information-container">
        <p className="information title">IP ADDRESS</p>
        <p className="information result">
          {data.ip_address ? data.ip_address : "Not Available"}
        </p>
      </div>

      <div className="divider" />

      <div className="each-information-container">
        <p className="information title">LOCATION</p>
        <p className="information result">
          {data.region ? data.region : "Not Available"}
          {data.country && `, ${data.country}`}
        </p>
      </div>

      <div className="divider" />

      <div className="each-information-container">
        <p className="information title">TIMEZONE</p>
        <p className="information result">
          {data.timezone.name
            ? `${data.timezone.name}, ${data.timezone.abbreviation}`
            : "Not Available"}
        </p>
      </div>

      <div className="divider" />

      <div className="each-information-container">
        <p className="information title">ISP</p>
        <p className="information result">
          {data.connection.autonomous_system_organization
            ? data.connection.autonomous_system_organization
            : "Not Available"}
        </p>
      </div>
    </div>
  );
};
