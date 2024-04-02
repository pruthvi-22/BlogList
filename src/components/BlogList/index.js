import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-list">
      {blogsList.map(blog => (
        <BlogItem key={blog.id} blogDetails={blog} />
      ))}
    </ul>
  )
}

export default BlogList
