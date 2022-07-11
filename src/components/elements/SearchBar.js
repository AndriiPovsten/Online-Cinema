import React, {useState, useRef}from "react";
import FontAwesome from 'react-fontawesome'
import {StyledSearchBar, StyledSearchBarContent} from '../styles/StyledSearchBar'
let SearchBar = ({callback}) => {
    let [state, setState]= useState('');
    let timeOut = useRef(null)
    let doSearch = event =>{
        let {value} = event.target;
        clearTimeout(timeOut.current);
        setState(value);
        timeOut.current = setTimeout(() =>{
            callback(value)
        }, 500)
    }
    return (
        <StyledSearchBar>
            <StyledSearchBarContent>
                <FontAwesome classname="fa-search" name="search" size="2x"/>
                <input
                type="text"
                placeholder="Search Movie"
                onChange={doSearch}
                value={state}
                />
            </StyledSearchBarContent>
        </StyledSearchBar>
    )
}
export default SearchBar;