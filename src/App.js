import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import {Route} from 'react-router-dom'



class BooksApp extends React.Component {
  state = {
    books : [
      {
        id:'libro1',
        name:'To kill a mockingbir',
        shelf:'Currently Reading',
        author:'mamaguebo',
        image:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
      },
      {
        id:'libro2',
        name:'Ender´s name',
        shelf:'Currently Reading',
        author:'cabroncete',
        image:'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api'
      },
      {
        id:'libro3',
        name:'Mira Vale',
        shelf:'Read',
        author:'andrea',
        image:'http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      {
        id:'libro4',
        name:'Y entonces',
        shelf:'Want to read',
        author:'juan',
        image:'http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      {
        id:'libro5',
        name:'encajar bloques',
        shelf:'Read',
        author:'simon',
        image:'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
      },
      {
        id:'libro6',
        name:'recetas',
        shelf:'Want to read',
        author:'pupupipi',
        image:'http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
      }
    ],
    bookShelfs: [
      {shelfTitle: 'Currently Reading', shelfId:'Currently Reading'},
      {shelfTitle: 'Read', shelfId:'Read'},
      {shelfTitle: 'Want to read', shelfId: 'Want to read'},
      {shelfTitle: 'None', shelfId: 'none'}
    ]
  }
    render(){
    return (
      <div>
        <BookShelf
        books={this.state.books}
        bookShelfs={this.state.bookShelfs}
        />
      </div>
    )
  }


  render() {
  return (
    <div>
      <Route exact path='/' render={() => (
        <BookShelf
          books={this.state.books}
          bookShelfs={this.state.bookShelfs}
        />
      )}
      />
    <Route path='/search' render={() => (
      <BookSearch />
      )}
    />
    </div>
  )
}
  }


export default BooksApp
