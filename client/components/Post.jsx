import React from 'react'
import PropTypes from 'prop-types'

const Post = ({post}) => {
  console.log(post)
  return (
    <div><a href={`http://reddit.com${post.permalink}`}>{post.title}</a></div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
