function SearchResultCard({ obj }) {
  console.log(obj);
  return (
    <div>
      <img src={obj.result.song_art_image_thumbnail_url} alt="" />
      <b>{obj.result.full_title}</b>
    </div>
  );
}

export default SearchResultCard;
