import { posts } from "../lib/posts";
import { Link } from "react-router-dom";


function BlogIndex(){
    return (
        <div>
            <h2>Blog posts</h2>
            <ul>
                {posts.map((post) => (
                    <li>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogIndex;