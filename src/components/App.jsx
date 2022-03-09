// import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerVideo: null, //I had an empty object, null is equivalent and less space
      videos: []
    };

    this.getYouTubeVideos('puppies'); // smoother to do initial query in constructor than in componentDidMount
  }

  // React Life Cycle Hook:
  // componentDidMount() {
  //   this.getYouTubeVideos('puppies');
  // }

  getYouTubeVideos(query) {
    searchYouTube(query, (data) => {
      this.setState({
        playerVideo: data[0],
        videos: data
      });
    });
  }

  handleVideoTitleClick(e, video) { // use 'handle', not 'on' to start these handler functions
    this.setState({
      playerVideo: video
    });
  }

  render() {

    // apply any state conditions here

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInputChange={this.getYouTubeVideos.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerVideo} />
          </div>
          <div className="col-md-5">
            <VideoList
              onVideoTitleClick={this.handleVideoTitleClick.bind(this)}
              videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }



}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
