import { render } from 'react-dom'
import { Router, Route,IndexRoute, hashHistory } from 'react-router'
import App from './App.js'
import Home from './Home/Home.js'
import About from './About/About.js'
import Work from './Work/Work.js'
import AddArticle from './AddArticle/AddArticle.js'
import FrontBlog from './Blog/FrontBlog.js'
import Article from './Article/Article.js'
import React, { PropTypes } from 'react'


class Routes extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/bloghistory" component={About}/>
          <Route path="/frontblog" component={FrontBlog}/>
          <Route path="/work" component={Work}/>
          <Route path="/add" component={AddArticle}/>
          <Route path="/view/:url" component={Article} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
