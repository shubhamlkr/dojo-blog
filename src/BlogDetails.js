import { useHistory, useParams } from "react-router-dom";
// import useFetch from "./useFetch";
import { useState } from "react";
import blogs from "./data/db.json"

const BlogDetails = () => {
  // const { id } = useParams();
  // const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  // const history = useHistory();

  const handleClick = () => {
    // fetch('http://localhost:8000/blogs/' + blog.id, {
    //   method: 'DELETE'
    // }).then(() => {
    //   history.push('/');
    // }) 
    alert("Server internal error")
  }
  const [Blog,setBlog]=useState(blogs.blogs)

  return (
    <div className="blog-details">
      {/* { isPending && <div>Loading...</div> } */}
      {/* { error && <div>{ error }</div> } */}
      {/* { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )} */}
      {
        Blog.map((b)=>(
                <article>
                <h2>{ b.title }</h2>
                <p>Written by { b.author }</p>
                <div>{ b.body }</div>
                <button onClick={handleClick}>delete</button>
                </article>
              ))
      }
    </div>
  );
}
 
export default BlogDetails;