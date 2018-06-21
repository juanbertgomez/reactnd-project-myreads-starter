import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'


class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }


  render () {
    const { book,books, booksShelfs, changeShelf} = this.props
    const cover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : '' 

    return (
        <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})` }}></div>
            <ShelfChanger 
            book={book}
            books={books}
            booksShelfs={booksShelfs}
            changeShelf={changeShelf}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
