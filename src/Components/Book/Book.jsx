import React from 'react'
import './Book.css'

function Book(props) {
    const Showbookdata = (data) => {
        console.log("singlebook", data)
        props.ListenToBookList(data)
        props.ListenToEachBook(data);

    }
    return (
        
        <div className="booklist">
           
            <div className="book">
                <div className="bookimg">
                    <div className="images">
                        <img  src={props.book.bookImage} alt="book" style={{width: "120px", height: "140px"}}
                        onClick={() => Showbookdata(props.book)}/>
                    </div>
                </div>
                <div className="booknames">
                    <h3 className="bookname">{props.book.bookName}</h3>
                    <p className="byauthor">by {props.book.authorName}</p>
                    <div className="rating">
                        <button className="ratingbtn">{props.book.rating}*</button>
                        <p className="quantity">({props.book.bookQuantity})</p>
                    </div>
                    <div className="pricediv">
                        <h2 className="price">Rs.{props.book.discountPrice}</h2>
                        <p className="discountprice">Rs.{props.book.actualPrice}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Book