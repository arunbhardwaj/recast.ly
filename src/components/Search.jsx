const Search = (props) => {
  // this.handleSubmit()?

  const handleClick = function(event) {
    console.log('Submitted');
  };

  const handleChange = function(event) {
    console.log(event.target);
    // chooseNewVideo(video)
    // this.props.searchForVideo()
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" placeholder="Search for something..."/>
      <button onClick={()=>{ return console.log('hi')}} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// /**
//        *
//        * Form Component
//        *
//        */
//  class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       entry: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
// ​
//   handleSubmit() {
//     this.props.onSubmission(this.state.entry);
//   }
// ​
//   handleChange(event) {
//     this.setState({ entry: event.target.value });
//   }
// ​
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           placeholder="Do something..."
//           value={this.state.entry}
//           onChange={this.handleChange}
//         />
//         <button type="submit">Add Task</button>
//       </form>
//     );
//   }
// }

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;