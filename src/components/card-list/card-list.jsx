import { Component } from "react";

class CardList extends Component {
    render(){
        const books = this.props.books;
        return(
            <div>
            {
                books.map((book) => {
                  return <h1>{book.name}</h1>
                })
            }
            </div>  
        )
    }
}

export default CardList;