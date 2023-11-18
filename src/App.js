import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component { 
  constructor() {
    super();
    this.state = {
      books: [],
      searchField : ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return {books: users};
          },
          () => {
            console.log(this.state)
          }

        ) 
      )
  }
  
  render(){
    const filterBooks = this.state.books.filter((book) => {
      return book.name.includes(this.state.searchField)
    })
    return (
      <div className='App'>
        <input className='search-box' type='search' placeholder='Search Books' onChange={(event) => {
          console.log(event.target.value)
          const searchField = event.target.value.toLocaleLowerCase()
          
          this.setState(() => {
            return { searchField }
          })
        }}></input>
        {
          filterBooks.map((book) => {
            return <h1>{book.name}</h1>
          })
        }
      
      </div>
    )
  }
}

export default App;
