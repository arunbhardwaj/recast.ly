// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import sYT from '../src/lib/searchYouTube.js'; // wtf is sYT

ReactDOM.render(<App searchYoutube={sYT}/>, document.getElementById('app'));