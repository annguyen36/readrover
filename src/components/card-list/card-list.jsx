import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card";

// const covers = require.context('./book-cover', true)

// const cover_list = covers.keys().map(image => covers(image));
// // console.log(cover_list)
class CardList extends Component {
    render(){
        const books = this.props.books;
        return(
            <div className='card-list'>
            {
                books.map((book) => {
                    
                  return (
                   <Card book={book}/>
                    
                    )         
                })
            }
            </div>  
        )
    }
}

export default CardList;