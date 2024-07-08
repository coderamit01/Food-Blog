import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayOut from '../Layout/LayOut';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';

const AllRouters = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <NotFound />,
    children: [
      {path: "/", element: <Home />}
    ]
  }
]);

export default AllRouters;