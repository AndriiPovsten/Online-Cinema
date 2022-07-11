import React from 'react';
import {Link} from '@reach/router'
import styled from 'styled-components'
import RMDBLogo from '../images/IMDBLogo.png'
import TMDBLogo from '../images/netflix_logo.png'
let StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;
  .header-content{
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0;
    margin: 0 auto;
    box-sizing: border-box;
    @media screen and (max-width: 500px) {
      min-height: 0px;
    } 
  }
`;
let StyledRMDBLogo = styled.img`
  width: 250px;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;
let StyledTMDBLogo = styled.img`
  width: 122px;
  margin-top: 25px;
  float: right;
  @media screen and (max-width: 500px){
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`
let Header = () => (
    <StyledHeader>
        <div className="header-content">
            <Link to="/">
                <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo"/>
            </Link>
            <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo"/>
        </div>
    </StyledHeader>
)
// this is javascript not html
export default Header;
