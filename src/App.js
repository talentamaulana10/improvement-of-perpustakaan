import React,{Component} from 'react'
import Home from './pages/Home'
import {Route, Switch} from "react-router-dom"
import Book from './pages/Book'
import Coba from './component/Coba'
import Author from './pages/Author';
import Table from './component/Table';
import BookCreate from './pages/BookCreate';
import AuthorCreate from './pages/AuthorCreate';
export default class App extends Component{
  componentDidMount(){
    document.title="react app"
  }
  render(){
    return(
      <div>
        <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/book" exact  component={Book} />
                <Route path="/coba" exact  component={Coba} />
                <Route path="/author" exact  component={Author} />
                <Route path="/table" exact  component={Table} />
                <Route path="/book/create" component={BookCreate} />
                <Route path="/author/create" component={AuthorCreate} />

        </Switch>
      </div>
    )
  }
}