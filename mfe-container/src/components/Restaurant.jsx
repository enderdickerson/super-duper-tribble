import React from 'react';
import MicroFrontend from './MicroFrontend';

const RESTAURANT_HOST = 'http://localhost:3002';

const Restaurant = ({ history }) => (
  <MicroFrontend history={history} name="restaurant" host={RESTAURANT_HOST} />
);

export default Restaurant;