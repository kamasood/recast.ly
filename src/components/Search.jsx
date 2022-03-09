// var Search = ({handleSearchInputChange}) => (
//   <div className="search-bar form-inline">
//     <input
//       className="form-control"
//       onChange={(e) => { handleSearchInputChange(e.target.value); }}
//       type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// );

class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  // passed in props.handleSearchInputChange (calls getYouTubeVideos)

  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
