import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AllRouters from './AllRouters/AllRouters.jsx';
import './assets/css/combined.css';

const App = () => {
  useEffect(() => {
    // Function to dynamically load a script
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // List of scripts to load
    const scripts = [
      '/src/assets/js/jquery-3.7.1.min.js',
      '/src/assets/js/viewport.jquery.js',
      '/src/assets/js/bootstrap.bundle.min.js',
      '/src/assets/js/jquery.nice-select.min.js',
      '/src/assets/js/jquery.waypoints.js',
      '/src/assets/js/jquery.counterup.min.js',
      '/src/assets/js/swiper-bundle.min.js',
      '/src/assets/js/jquery.meanmenu.min.js',
      '/src/assets/js/jquery.magnific-popup.min.js',
      '/src/assets/js/animation.js',
      '/src/assets/js/wow.min.js',
      '/src/assets/js/main.js',
    ];

    // Load all scripts in sequence
    scripts.reduce((p, script) => {
      return p.then(() => loadScript(script));
    }, Promise.resolve());
  }, []);

  return (
    <React.StrictMode>
      <RouterProvider router={AllRouters} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
