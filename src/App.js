import React, { Component } from "react";

import youtube from "./api/youtube";
import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoDetail from "./components/VideoDetail/VideoDetail";

import "./App.css";
import VideoList from "./components/VideoList/VideoList";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    startLoading: false,
    error: undefined,
    isAuthenticated: false
  };

  // componentDidMount(d) {
  //   this.onSearchVideo()
  // }
  

  onSearchVideo = async videoValue => {
    this.setState({ 
      startLoading: true, 
      error: undefined,
      // selectedVideo: null
    });
    const KEY = "AIzaSyBCmpWcOUJaDdnb2kZrPK3_AEAcmRR4c6o";
    try {
      const response = await youtube.get("/search", {
        params: {
          part: "snippet",
          maxResults: 50,
          key: KEY,
          q: videoValue
        }
      });
      this.setState({ 
        videos: response.data.items, 
        selectedVideo: response.data.items[0],
        startLoading: false
      });
    } catch (err) {
      this.setState({
        error: { errorMessage: err.toString() },
        startLoading: false
      });
    }
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  errorHandler = () => {
    this.setState({ error: undefined });
  };

  render() {
    return (
      <React.Fragment>
        <header className="main_header">
          <Navigation isAuthenticated={this.state.isAuthenticated} />
        </header>
        <div className="h51" />
        <SearchBar onSubmit={this.onSearchVideo} />

        {this.state.startLoading && <Loader />}
        {this.state.error && (
          <ErrorMessage
            onErrorHandler={this.errorHandler}
            error={this.state.error}
          />
        )}

        <div className="container">
          <div className="grid-view">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={this.onVideoSelect}
              startLoading={this.state.startLoading}
              videos={this.state.videos}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
