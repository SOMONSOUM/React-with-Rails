import React from 'react'
import axios from 'axios'
import Post from './Post';

class Posts extends React.Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('/api/posts').then(response => {
      console.log(response.data.posts);
      this.setState({
        posts: response.data.posts
      });
    })
  }

  render() {
    const { posts } = this.state
    return (
      <div className="container">
        {posts.map(post => (
            <Post key={post.id}
              post={post}/>
          ))}
      </div>
    )
  }
}

export default Posts
