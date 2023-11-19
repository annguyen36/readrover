import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

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
  onSearchChange = (event) => {
    console.log(event.target.value)
    const searchField = event.target.value.toLocaleLowerCase()
    
    this.setState(() => {
      return { searchField }
    })
  }
  render(){
    const { books, searchField} = this.state;
    const { onSearchChange } = this;
    const filterBooks = books.filter((book) => {
      return book.name.toLocaleLowerCase().includes(searchField)
    })
    return (
      <div className='App'>
        <SearchBox onSearchHandler={onSearchChange} />
        <CardList books={filterBooks}/>
      </div>
    )
  }
}

export default App;
