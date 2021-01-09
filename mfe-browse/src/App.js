import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import Loading from './components/Loading';
import Filters from './components/Filters';
import RestaurantList from './components/RestaurantList';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const defaultFilters = {
  nameFilter: '',
  priceRangeFilter: {
    $: false,
    $$: false,
    $$$: false,
    $$$$: false,
  },
};

const defaultHistory = createBrowserHistory();

const App = ({ history }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [nameFilter, setNameFilter] = useState(defaultFilters.nameFilter);
  const [priceRangeFilter, setPriceRangeFilter] = useState({
    ...defaultFilters.priceRangeFilter,
  });

  useEffect(() => {
    const host = process.env.REACT_APP_CONTENT_HOST;
    fetch(`${host}/restaurants.json`)
      .then((result) => result.json())
      .then((restaurants) => {
        setRestaurants(
          restaurants.map((restaurant) => ({
            ...restaurant,
            imageSrc: `${host}${restaurant.imageSrc}`,
          }))
        );
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
        setError(true);
      });
  }, []);

  const checkPriceRangeFilter = (range) => (checked) =>
    setPriceRangeFilter({
      ...priceRangeFilter,
      [range]: checked,
    });

  const resetAllFilters = () => {
    setNameFilter(defaultFilters.nameFilter);
    setPriceRangeFilter({...defaultFilters.priceRangeFilter});
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <MainColumn>
        Sorry, but the restaurant list is unavailable right now
      </MainColumn>
    );
  }

  return (
    <Router history={history || defaultHistory}>
      <MainColumn>
        <Filters
          name={nameFilter}
          priceRange={priceRangeFilter}
          setNameFilter={setNameFilter}
          setPriceRangeFilter={checkPriceRangeFilter}
          resetAll={resetAllFilters}
        />
        <RestaurantList
          restaurants={restaurants}
          priceRangeFilter={priceRangeFilter}
          nameFilter={nameFilter}
        />
      </MainColumn>
    </Router>
  );
};

export default App;
