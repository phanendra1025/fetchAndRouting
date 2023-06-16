// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogItemDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTheBlogItemDetails()
  }

  getTheBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/blogs/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const updatedBlogData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogItemDetails: updatedBlogData, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {id, title, imageUrl, avatarUrl, content, author} = blogItemDetails

    return (
      <div className="container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-item-details-container">
            <h1 className="heading">{title}</h1>
            <div className="author-details-container">
              <img
                src={avatarUrl}
                className="blog-item-details-author-image"
                alt="title"
              />
              <p>{author}</p>
            </div>
            <img
              src={imageUrl}
              alt={`blog${id}`}
              className="blog-item-details-image"
            />
            <p className="content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
