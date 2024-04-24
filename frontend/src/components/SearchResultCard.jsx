import './SearchResultCard.css';

function SearchResultCard({ obj }) {
  return (
    <div className="search-result">
      <img src={obj.result.song_art_image_thumbnail_url} alt="" />
      <ul>
        <li>
          <b>{obj.result.title}</b>
        </li>
        <li>{obj.result.artist_names}</li>
        <li>{obj.result.release_date_for_display}</li>
      </ul>
    </div>
  );
}

export default SearchResultCard;
