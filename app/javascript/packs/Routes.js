import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Posts from '../components/Post/Posts'
import NewPost from '../components/Post/NewPost'
import Layout from '../components/Layout/Layout';

class Routes extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/new_post" component={NewPost} />
      </Switch>
      </Layout>
    )
  }
}

export default Routes
