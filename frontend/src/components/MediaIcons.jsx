import './MediaIcons.css';

function MediaIcons({ media }) {
  return (
    <div>
      {media.map((item, index) => {
        if (item.provider === 'soundcloud') {
          return (
            <a href={item.url}>
              <img className="media-icon" src={'../../public/soundcloud.png'} />
            </a>
          );
        } else if (item.provider === 'spotify') {
          return (
            <a href={item.url}>
              <img className="media-icon" src={'../../public/Spotify_Icon_RGB_White.png'} />
            </a>
          );
        }
      })}
    </div>
  );
}

export default MediaIcons;
