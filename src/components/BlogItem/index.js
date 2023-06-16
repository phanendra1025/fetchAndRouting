// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, imageUrl, title, avatarUrl, topic, author} = blogDetails
  return (
    <Link to={`/blogs/${id}`} className="link-item">
      <li className="blog-item">
        <img src={imageUrl} alt="profile" className="blog-image" />
        <div className="blog-text-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-details-container">
            <img src={avatarUrl} className="author-image" alt={`avatar${id}`} />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
