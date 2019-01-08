import React from 'react'

const Post = (props) => {
  const {
    title,
    body
  } = props.post
  return (
    <div className="post">
      <p className="title font-weight-bold">{title}</p>
      <p className="body">{body}</p>
    </div>
  )
}

export default Post

