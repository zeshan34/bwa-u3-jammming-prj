import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleTermChange(event) {
        this.props.onSearch(event.target.value);
    }

    render() {
        // @Reviewer: I removed the SEARCH button, because it was useless. Is it a bug in the instrcutions or did I miss something?
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
            </div>
        );
    }
}

export default SearchBar;

