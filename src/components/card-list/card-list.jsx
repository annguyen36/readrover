import { Component } from "react";
import './card-list.styles.css';
import './card.styles.css';

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
                        <div className="displayCard">
                            <h2>{book.name}</h2>
                            <p>{book.author}</p>
                            <img alt={book.name} src={book.cover} width="300" height="300" className="center image-block"/>
                        </div>
                        <div className="hide">
                           <p>{book.year}</p> 
                           <p>{book.mydata.note}</p> 
                        </div>
                    </div>
                    
                    )         
                })
            }
            </div>  
        )
    }
}

export default CardList;