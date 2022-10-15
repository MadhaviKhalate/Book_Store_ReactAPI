import React from 'react'
import { getAllBooks, getBookbyid } from '../../Services/DataServices'
import { useNavigate } from 'react-router-dom'
import Book from '../Book/Book'
import QuickView from '../QuickView/QuickView'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Home.css'


function Home(props) {


    const navigate2 = useNavigate();
    const [book, setBooks] = React.useState([])
    const [bookForView, setBookForView] = React.useState([])

    const [view,setView] = React.useState(true)
    const [selectBook,setSelectBook] = React.useState("")


    const ListenToBookList = () => {
        setView(false)
    } 

    const ListenToEachBook = (data) =>{
        setSelectBook(data)
    }
    const booksArray = book.map((books) => (
        <Book book={books} ListenToBookList={ListenToBookList} ListenToEachBook={ListenToEachBook} />
    ))

   
    const getBooks = () => {
        getAllBooks().then(response => {
            console.log(response); setBooks(response.data.data);
        }).catch((error) => (console.log(error)))
    }

    React.useEffect(() => {
        getBooks()
    }, [])

    return (
        <div>
            <Header />
            <div className='bookArray' /* onClick={OnBookView} */>
                {view ? booksArray : <QuickView selectBook={selectBook}/>}
                
            </div>
            <Footer />
        </div>
    )
}

export default Home