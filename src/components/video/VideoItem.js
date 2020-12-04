import './VideoItem.css';
import React from 'react';
// import youtubeData from '../../apis/youtube-data'


const VideoItem = ({ video, onVideoSelect }) => {
  // const [views, setViews]=useState('')
  // const getViews=async(video)=>{
  //   const response=await youtubeData.get({
  //     params:{
  //       id:video.id.videoId
  //     }
  //   })
  //   console.log(response)
  //   // setViews(response.items.statistics.viewCount)
  // }
  // getViews(video)
  
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header item-title"><p>{video.snippet.title}</p></div>
        <br/>
  <p className="channel-name">{video.snippet.channelTitle}</p>
        <p className="views">views: </p>
      </div>
    </div>
  );
};

export default VideoItem;
