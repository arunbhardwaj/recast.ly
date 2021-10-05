import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: {
        'id': {
          'kind': 'youtube#video',
          'videoId': 'abc'
        },
        'snippet': {
          'title': '',
          'description': '',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/dYh6R4Jhxoo/default.jpg',
              'width': 120,
              'height': 90
            }
          },
        }
      },
      videoList: [],
    };

    this.chooseNewVideo = this.chooseNewVideo.bind(this);
    this.searchForNewVideo = this.searchForNewVideo.bind(this);
  }

  componentDidMount() {
    this.props.searchYoutube('Cute cat video', (data) => {
      this.setState({
        currentVideo: data[Math.floor(Math.random() * data.length)],
        videoList: data,
      });
    });
  }

  chooseNewVideo(video) {
    this.setState({ currentVideo: video });
  }

  searchForNewVideo(string) {
    this.props.searchYoutube(string, (data) => {
      this.setState({
        currentVideo: data[0],
        videoList: data,
      });
    });
  }

  // https://stackoverflow.com/questions/23493726/how-to-properly-debounce-ajax-requests

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><Search searchForVideo={this.searchForNewVideo}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.currentVideo} parentState={this.state}/></h5></div>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} parentState={this.state} onVideoClick={this.chooseNewVideo}/>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
