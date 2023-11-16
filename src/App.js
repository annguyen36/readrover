import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      books: [
        {
          name: "Start With Why",
          ISBN: "1234567890"
        },
        {
          name: "Leader eat last",
          ISBN: "0987654321"
        },
        {
          name: "Sweet Little lies",
          ISBN: "23457890"
        }
      ]
      
    }
  }
  render(){
    return (
      <div className='App'>
        {
          this.state.books.map((book) => {
            return <h1 key={book.ISBN}>{book.name}</h1>
          })
        }
      
      </div>
    )
  }
}

export default App;
