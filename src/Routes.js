import { render } from 'react-dom'
import { Router, Route,IndexRoute, browserHistory } from 'react-router'
import App from './App.js'
import Home from './Home/Home.js'
import BlogHistory from './BlogHistory/BlogHistory.js'
import Work from './Work/Work.js'
import AddArticle from './AddArticle/AddArticle.js'
import FrontBlog from './Blog/FrontBlog.js'
import BackBlog from './Blog/BackBlog.js'
import Article from './Article/Article.js'
import React, { PropTypes } from 'react'


class Routes extends React.Component {
  render () {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/bloghistory" component={BlogHistory}/>
          <Route path="/frontblog" component={FrontBlog} />
          <Route path="/frontblog/:url" component={Article} />
          <Route path="/backblog" component={BackBlog}/>
          <Route path="/work" component={Work}/>
          <Route path="/add" component={AddArticle}/>
        </Route>
      </Router>
    )
  }
}

export default Routes;
