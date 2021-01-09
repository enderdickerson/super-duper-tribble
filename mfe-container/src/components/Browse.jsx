import React from 'react';
import MicroFrontend from './MicroFrontend';

const BROWSE_HOST = 'http://localhost:3001';

const Browse = ({ history }) => (
  <MicroFrontend history={history} name="browse" host={BROWSE_HOST} />
);

export default Browse;