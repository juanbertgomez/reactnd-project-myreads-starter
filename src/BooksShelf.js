import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Book from './Book'

class BooksShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    booksShelfs: PropTypes.array.isRequired,
  }

 render () {
   const { books, booksShelfs, changeShelf } = this.props

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
              <Book
                book = {filteredBook}
                books={books}
                booksShelfs = { booksShelfs }
                changeShelf={changeShelf}
              />
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
