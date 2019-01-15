import React from 'react'

const Post = (props) => {
  const {
    title,
    body
  } = props.post
  return (
    <div className="post bg-secondary text-center shadow rounded text-white mt-3">
      <p className="title font-weight-bold pt-2">{title}</p>
      <p className="body pb-2">{body}</p>
    </div>
  )
}

export default Post

