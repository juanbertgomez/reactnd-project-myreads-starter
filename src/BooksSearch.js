import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class BooksSearch extends Component {
  static propTypes = {
    booksShelfs: PropTypes.array.isRequired,
  }

  state = {
    booksSearch: [],
    query: '',
    searchState: false
  }

  getBooks = (event) => {
    const query = event.target.value.trim()
    this.setState({ query: query })

    if (query) {
      BooksAPI.search(query, 20).then((books)=> {
        books.lenght > 0 ? this.setState({booksSearch: books, searchState: false }) : this.setState({booksSearch: books, searchState: true })
      })
    } else this.setState({ booksSearch: [], searchState: false})
  }

  render () {
    const { books, booksShelfs, changeShelf } = this.props
    const { booksSearch, query, searchState } = this.state


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to ='/' className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={ query }
              onChange={ this.getBooks }
            />
          </div>
        </div>
        <div className="search-books-results">

             {searchState && booksSearch.length ? (
         
          <ol className="books-grid">
          {booksSearch.map((book)=>(
             <Book
             book = {book}
             books={books}
             booksShelfs = { booksShelfs }
             changeShelf={changeShelf}
           />
          )
          )}
          </ol>
             ): (
              <div>No Search result</div>
              
            )}
        </div>
      </div>
    )
  }
}

export default BooksSearch
