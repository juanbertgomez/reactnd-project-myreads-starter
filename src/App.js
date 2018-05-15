import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'



class BooksApp extends React.Component {
  state = {
    books : [
      {
        id:'libro1',
        name:'To kill a mockingbir',
        shelf:'currentlyReading',
        author:'mamaguebo',
        image:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
      },
      {
        id:'libro2',
        name:'Ender´s name',
        shelf:'currentlyReading',
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
        shelf:'wantToRead',
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
        shelf:'wantToRead',
        author:'pupupipi',
        image:'http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
      }
    ],
    bookShelfs: [
      {title: 'Currently Reading', id:'Currently Reading'},
      {title: 'Read', id:'Read'},
      {title: 'Want to read', id: 'Want to read'}
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
  }


export default BooksApp
