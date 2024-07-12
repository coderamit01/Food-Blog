import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayOut from '../Layout/LayOut';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import Contact from '../Pages/Contact';
import Shop from '../Pages/Shop';
import SingleProductPage from '../Pages/SingleProductPage';
import SingleBlogPage from '../Pages/SingleBlogPage';
import Blogs from '../Pages/Blogs';

const AllRouters = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
    errorElement: <NotFound />,
    children: [
      {path: "/", element: <Home />},
      {path: '/blog', element: <Blogs />},
      {path: '/shop', element: <Shop />},
      {path: '/single-product/:id', element:<SingleProductPage />},
      {path: '/single-blog/:id', element: <SingleBlogPage />},
      {path: "/contact", element: <Contact />}
    ]
  }
]);

export default AllRouters;