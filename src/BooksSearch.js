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
    query: ''
  }

  componentWillUpdate(query) {
    BooksAPI.search(query)
      .then((booksSearch) => {
        this.setState(()=>({
          booksSearch
        }))
      })
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  clearQuery = () => {
    this.updateQuery('')
  }

  render () {
    const { booksSearch, query } = this.state
    const { booksShelfs } = this.props
    const showingBooks = query === ''
    ? []
    : booksSearch

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to ='/' className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {showingBooks.map((book)=>(
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select>
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
