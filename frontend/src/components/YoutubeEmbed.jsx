import React from 'react';
import PropTypes from 'prop-types';

function getYtLink(str){
    const split = str.split('v=')
    console.log(split[1])
    return split[1]
}

function YoutubeEmbed({ youtubeLink }) {
    console.log(youtubeLink)
    return (
    <div>
      <iframe
        width="425"
        height="235"
        src={getYtLink(youtubeLink)}
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
