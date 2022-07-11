import React from 'react';
import {Router} from '@reach/router'
import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from "./NotFound";
import {createGlobalStyle} from 'styled-components'


let GlobalStyle = createGlobalStyle`
    body{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
    }

`
const App = () => (
    <div>
        <Header/>
        <Router>
            <Home path="/"/>
            <Movie path="/:movieId"/>
            <NotFound default/>
        </Router>
        <GlobalStyle/>
    </div>
)
export default App