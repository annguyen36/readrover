import { Component } from "react";
import './card.styles.css';

class Card extends Component {
    render() {
        const book = this.props.book;
        return(
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
    }
}

export default Card