// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {
    blogList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTheBlogList()
  }

  getTheBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachObject => ({
      id: eachObject.id,
      title: eachObject.title,
      imageUrl: eachObject.image_url,
      avatarUrl: eachObject.avatar_url,
      author: eachObject.author,
      topic: eachObject.topic,
    }))
    this.setState({blogList: updatedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <ul className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {blogList.map(eachBlog => (
              <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
            ))}
          </ul>
        )}
      </ul>
    )
  }
}

export default BlogList
