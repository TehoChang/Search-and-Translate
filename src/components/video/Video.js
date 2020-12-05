import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class Video extends React.Component {

  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('kobe');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params:{
        q:term,
        part: 'snippet',
        maxResults: 5,
        
      }     
    });
   
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">        
        <SearchBar onFormSubmit={this.onTermSubmit} label='Youtube Video Search'/>
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;



