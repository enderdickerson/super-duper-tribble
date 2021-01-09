import React, { useEffect } from 'react';

const mfeConfig = (name, history) => () => {
  console.log('render mfe with', name, history);
  window[`render${name}`](`${name}-container`, history);
};

const MicroFrontend = ({ name, host, history }) => {
  useEffect(() => {
    const renderMicroFrontend = mfeConfig(name, host, history);
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `${host}${manifest['main.js']}`;
        script.onload = renderMicroFrontend;
        document.head.appendChild(script);
      });

      return () => {
        window[`unmount${name}`](`${name}-container`);
      }
  }, [name, host, history]);

  return <main id={`${name}-container`} />;
};

export default MicroFrontend;
