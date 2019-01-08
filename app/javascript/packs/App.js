import React from 'react'
import Home from '../components/Home/Home'
import Posts from '../components/Post/Posts'
import NewPost from '../components/Post/NewPost'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/new_post" component={NewPost} />
        </Switch>
      </div>
    )
  }
}

export default App
