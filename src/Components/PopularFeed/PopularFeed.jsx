import React, { useEffect, useState } from 'react';
import PopularFeedItem from './PopularFeedItem';

const PopularFeed = () => {
  const AllBlogs = '../../../public/JsonData/BlogData.json';
  const [blogs,setBlogs] = useState([]);
  useEffect(() => {
    fetch(AllBlogs)
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <div className="popular-posts">
      {
        blogs.slice(0,3).map(blog => (<PopularFeedItem key={blog.id} blog={blog} />) )
      }
    </div>
  );
};

export default PopularFeed;