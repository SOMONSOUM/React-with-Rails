import React from 'react'

const Post = (props) => {
  const {
    title,
    body
  } = props.post
  return (
    <React.Fragment>
      <h4>{title}</h4>
      <p>{body}</p>
    </React.Fragment>
  )
}

export default Post

