import { Component } from "react";
import './card-list.styles.css';

const covers = require.context('./book-cover', true)

const cover_list = covers.keys().map(image => covers(image));
console.log(cover_list)
class CardList extends Component {
    render(){
        const books = this.props.books;
        return(
            <div className='card-list'>
            {
                books.map((book) => {
                    
                  return (
                    <div className='card-container'>
                        <h1>{book.name}</h1>
                        <h1>{book.id}</h1>
                        <img alt={book.name} src={`1.jpg`}/>
                    </div>
                    
                    
                    )
                  
                    
                })
            }
            </div>  
        )
    }
}

export default CardList;