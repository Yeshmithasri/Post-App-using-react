import {  useContext } from "react";
import { useParams,Link } from "react-router-dom";
import DataContext from "./context/dataContext";


const Postpost = () => {
  const {posts,handleDelete}=useContext(DataContext)
  const {id} =useParams(); 
  const post =posts.find(post => (post.id).toString()=== id);
  return (
    <main className="Postpost">
      <article className="post">
        {post &&
          <>
          <h2>{post.title}</h2>
          <p className="postDate">{post.datetime}</p>
          <p className="postBody">{post.body}</p>
          <Link to={`/edit/${post.id}`}>
          <button>Edit Button</button>
          </Link>
          <button onClick={()=>handleDelete(post.id)}>Delete Post</button>
          </>
        }
        {!post &&
          <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to='/'>Visit out Homepage</Link>
          </p>
          </>}
      </article>
    </main>
  )
}

export default Postpost