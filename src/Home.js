
import React, { useState } from 'react';
import Bloglist from './Bloglist';
import useFetch from './useFetch';
import blogs from "./data/db.json"
const Home= () => {
    // const {data:blogs,ispending,error}=useFetch(' http://localhost:8000/blogs');
    const [Blog, setBlog]=useState(blogs)
    return (  
        <div className="home">
        {/* {error && <div>{error}</div> }
        {ispending && <div>loading..</div> } */}
        {/* {blog && <Bloglist blogs={blog} title="All blogs"  />} */}
        {Blog && <Bloglist blogs={Blog.blogs} title="All blogs"  />}
        </div>
        
    );
}
 
export default Home;