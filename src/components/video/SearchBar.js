import React from 'react';
// import Dropdown from '../utility/Dropdown';


class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="three fields">
            <div className="six wide field ">
              <label>{this.props.label}</label>
              <div className="ui icon input">
                <input
                  type="text"
                  value={this.state.term}
                  onChange={this.onInputChange}
                />
                <i className="search icon large " />
              </div>
            </div>
            <div className="field">
              {/* <Dropdown /> */}
            </div>

          </div>

        </form>
      </div>
    );
  }
}

export default SearchBar;
