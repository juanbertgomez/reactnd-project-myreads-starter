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

  changeShelf = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then(reponse=>{

      // set new shelf for book
      newBook.shelf = newShelf

      //get list new list of books
      var newBooks = this.state.books.filter(book=> book.id!==newBook.id)

      //add book to new list
      newBooks.push(newBook)
      this.setState({books: newBooks})
    })
  }


  render() {
    const { booksShelfs, books } = this.state
  return (
    <div>
      <Route exact path='/' render={() => (
        <BooksShelf
          books={ books }
          booksShelfs={ booksShelfs }
          changeShelf = { this.changeShelf }
        />
      )}
      />
    <Route path='/search' render={() => (
      <BooksSearch
        books={ books }
        booksShelfs={ booksShelfs }
        changeShelf = { this.changeShelf }
        />
      )}
    />
    </div>
  )
}
  }


export default BooksApp
