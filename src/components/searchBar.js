import React, { Component } from 'react';

import { Link } from 'react-router-dom';


class SearchBar extends Component {
    render() {
        return (
        <form >
            <input placeholder="Search DailSmarty"/>
        </form>
        )
    }
}

export default SearchBar;