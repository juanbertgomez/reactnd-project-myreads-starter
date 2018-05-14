import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'



class BooksApp extends React.Component {
  state = {
    books : [
      {
        id:'libro1',
        name:'To kill a mockingbird',
        state:'currentlyReading',
        author:'Harper Lee',
        image:''
      }
    ]

  }
  render() {
    return (
      <BookShelf/>
    )
  }
}

export default BooksApp
