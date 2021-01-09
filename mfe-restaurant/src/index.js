import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderRestaurant = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
};

window.unmountRestaurant = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
