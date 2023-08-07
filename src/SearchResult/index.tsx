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
        <p className="information result">{data.ip}</p>
      </div>

      <div className="divider" />

      <div className="each-information-container">
        <p className="information title">LOCATION</p>
        <p className="information result">
          {data.location.region}, {data.location.country}
        </p>
      </div>

      <div className="divider" />

      <div className="each-information-container">
        <p className="information title">TIMEZONE</p>
        <p className="information result">{data.location.timezone}</p>
      </div>

      <div className="divider" />

      <div className="each-information-container">
        <p className="information title">ISP</p>
        <p className="information result">{data.isp}</p>
      </div>
    </div>
  );
};
