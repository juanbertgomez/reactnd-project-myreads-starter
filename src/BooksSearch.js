import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class BooksSearch extends Component {
  static propTypes = {
    booksSearch: PropTypes.array.isRequired,
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
    const { booksShelfs, changeShelf } = this.props
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
          <ol className="books-grid">
          {booksSearch.map((book)=>(
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={ (event)=> changeShelf(book, event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                      {booksShelfs.map((shelf) => (
                        <option value={shelf.shelfId} selected={shelf.shelfId == book.shelfId}>{shelf.shelfTitle}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
          )
          )}
          </ol>
        </div>
      </div>
    )
  }
}

export default BooksSearch
