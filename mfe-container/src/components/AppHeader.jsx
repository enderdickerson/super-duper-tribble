import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  background-color: #e79652;

  &.center-column {
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  & > div {
    padding: 0 10px;
    display: flex;
    align-items: center;
    height: 80px;
  }

  & h1 {
    margin: 0;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 38px;
  }

  & nav {
    height: 60px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    background-color: #f1d736;
    font-size: 20px;

    & ol {
      padding: 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }

  @media (min-width: 600px) {
    & nav ol {
      display: block;
    }
    & nav li {
      margin-right: 30px;
    }
  }

  & nav li {
    display: inline;
  }

  & nav a {
    color: inherit;
  }
`;

const AppHeader = () => (
  <Header>
    <div className="center-column">
      <h1>🍽 Feed me</h1>
    </div>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/">Browse restaurants</NavLink>
        </li>
        <li>
          <NavLink to="/random">Surprise me</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ol>
    </nav>
  </Header>
);

export default AppHeader;