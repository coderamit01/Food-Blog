import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';

const BlogSection = () => {
  const blogsData = '../../../public/JsonData/BlogData.json';
  const [blogs,setBlogs] = useState([]);
  useEffect(() => {
    fetch(blogsData)
    .then(res => res.json())
    .then(data => setBlogs(data))
  })
  return (
    <div className='row'>
      {
        blogs.slice(0,3).map((blog) => (
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" key={blog.id}>
            <BlogItem blog={blog} />
          </div>
        ))
      }
    </div>
  );
};

export default BlogSection;