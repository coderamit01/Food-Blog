import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayOut from '../Layout/LayOut';
import Home from '../Pages/Home';

const AllRouters = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {path: "/", element: <Home />}
    ]
  }
]);

export default AllRouters;