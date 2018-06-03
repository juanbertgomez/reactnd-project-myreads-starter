import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class BooksShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    booksShelfs: PropTypes.array.isRequired,
  }

 render () {
   const { books, booksShelfs } = this.props

   return (
     <div>
       <div className="list-books-title">
         <h1>MyReads</h1>
       </div>
     {booksShelfs.filter(function(shelf) {return shelf.shelfId!=='none'}).map((filteredShelf)=>(
       <div className="bookshelf">
         <h2 className="bookshelf-title">{filteredShelf.shelfTitle}</h2>
         <div className="bookshelf-books">
           <ol className="books-grid">
            {books.filter(function(book) {return book.shelf===filteredShelf.shelfId}).map((filteredBook) => (
              <li>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${filteredBook.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>Move to...</option>
                          {booksShelfs.map((shelf) => (
                            <option value={shelf.shelfId} selected={shelf.shelfId == filteredShelf.shelfId}>{shelf.shelfTitle}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{filteredBook.title}</div>
                  <div className="book-authors">{filteredBook.authors}</div>
                </div>
              </li>
            ))}
           </ol>
         </div>
       </div>
     ))}
       <div className='open-search'>
         <Link to='/search'
           className='open-search'
         >Add a book</Link>
       </div>
     </div>
   )
 }
}


export default BooksShelf
