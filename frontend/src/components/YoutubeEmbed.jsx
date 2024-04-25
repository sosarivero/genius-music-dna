import React from 'react';
import PropTypes from 'prop-types';
import './YoutubeEmbed.css'

function getYTCode(str) {
  const split = str.split('v=');
  console.log(split[1]);
  return split[1];
}

// <YoutubeEmbed youtubeLink={song.media[1].url}></YoutubeEmbed>

function YoutubeEmbed({ youtubeLink }) {
  console.log(youtubeLink);
  return (
    <div>
      <iframe className='video'
        width="425"
        height="235"
        src={`https://www.youtube.com/embed/${getYTCode(youtubeLink)}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

YoutubeEmbed.propTypes = {
  youtubeLink: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
