import React, {Component} from 'react'
import {Link} from 'react-router-dom'

function BookShelf(props)  {
 return (
   <div>
     <div className="list-books-title">
       <h1>MyReads</h1>
     </div>
   {props.bookShelfs.filter(function(shelf) {return shelf.shelfId!=='none'}).map((filteredShelf)=>(
     <div className="bookshelf">
       <h2 className="bookshelf-title">{filteredShelf.shelfTitle}</h2>
       <div className="bookshelf-books">
         <ol className="books-grid">
          {props.books.filter(function(book) {return book.shelf===filteredShelf.shelfId}).map((filteredBook) => (
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${filteredBook.image})` }}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="none" disabled>Move to...</option>
                        {props.bookShelfs.map((shelf) => (
                          <option value={shelf.shelfId} selected={shelf.shelfId == filteredShelf.shelfId}>{shelf.shelfTitle}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="book-title">{filteredBook.name}</div>
                <div className="book-authors">{filteredBook.author}</div>
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


export default BookShelf
