import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const thumbnailUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={ onVideoSelect.bind(this, video) }>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={ thumbnailUrl }/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            { video.snippet.title }
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
