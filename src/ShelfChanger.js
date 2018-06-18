import React, {Component} from 'react'
import PropTypes from 'prop-types'


class ChangeShelf extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired

  }


  render () {
    const { book, books, booksShelfs, changeShelf} = this.props

    let currentShelf = 'none'

    for (let item of books ) {
      if (item.id===book.id) {
        currentShelf = item.shelf
      }
    }


    return (
    <div className="book-shelf-changer">
      <select onChange={ (event)=> changeShelf(book, event.target.value)}
      defaultValue={currentShelf}>
        
        <option value="none" disabled>Move to...</option>
          {booksShelfs.map((shelf) => (
            <option value={shelf.shelfId}>{shelf.shelfTitle}</option>
          ))}
      </select>
    </div>
    )
  }
}

export default ChangeShelf
