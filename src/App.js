import React, {Component}from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksShelf from './BooksShelf'
import BooksSearch from './BooksSearch'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'


class BooksApp extends Component {
  state = {
    books : [],
    booksShelfs: [
      {shelfTitle: 'Currently Reading', shelfId:'currentlyReading'},
      {shelfTitle: 'Read', shelfId:'read'},
      {shelfTitle: 'Want to read', shelfId: 'wantToRead'},
      {shelfTitle: 'None', shelfId: 'none'}
    ]
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(()=>({
          books
        }))
      })
  }



  render() {
  return (
    <div>
      <Route exact path='/' render={() => (
        <BooksShelf
          books={this.state.books}
          booksShelfs={this.state.booksShelfs}
        />
      )}
      />
    <Route path='/search' render={() => (
      <BooksSearch
        booksSearch={this.state.booksSearch}
        booksShelfs={this.state.booksShelfs}
        />
      )}
    />
    </div>
  )
}
  }


export default BooksApp
