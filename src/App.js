import React, { Component } from 'react'; //import React
import './App.css'; //import CSS for APP
import SearchBar from './components/search_bar'; //import SearchBar from Components search_bar.js
import VideoList from './components/video_list'; //import VideoList from Components video_list.js
import VideoDetail from './components/video_detail'; //import VideoDetal from Components video_detail.js
import _ from 'lodash'; // install Loadash for function timer  npm install --save lodash
import YTSearch from 'youtube-api-search'; 
//API Key from Youtube
const API_KEY = 'AIzaSyDzz6NKN1qhbIK1y-yJLLPJmyZCoPPGl_w';



class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null
     };

     // Home Page video search
     this.videoSearch('Rihanna');
    
  }

  videoSearch(term){

    // youtube API connection with Application
    YTSearch({key:API_KEY, term: term}, (videos) => { 
      this.setState({ 
        videos : videos ,
        selectedVideo: videos[0]
       }); 
    }); 

  }

  render(){
    // video search dellay for 500 milliseconds
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (
      <div className="container">
        <div className="row">
          <SearchBar onSearchTermChange={videoSearch} />
        </div>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/> 
        </div>
      </div>
    );
  }
} 

export default App;
