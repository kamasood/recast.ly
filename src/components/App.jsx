import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      videoList: exampleVideoData,
      playerVideo: exampleVideoData[0]

    };
  }

  // add event handlers
  onVideoTitleClick(event) {
    console.log(this);
    // this.setState({
    //   playerVideo: event
    // });
  }

  render() {

    // apply any state conditions here

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerVideo} />
          </div>
          <div className="col-md-5">
            <VideoList onVideoTitleClick={this.onVideoTitleClick} videos={this.state.videoList} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
