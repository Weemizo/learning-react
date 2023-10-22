import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const books = [
    {
        author: 'Jan Kowalski',
        title: '"Ksiazka roku"',
        src: 'logo192.png'
    },
    {
        author: 'Adam Nowak',
        title: '"Ksiazka roku 2"',
        src: 'logo192.png'
    },
]

const Book = () => {
    return <>
            {books.map((book) => {
            return <div className='book'>
                <img src={book.src} alt="" />
                <h2>{book.author}</h2>
                <h4>{book.title}</h4>
                </div>
})}
            </>
    
}

const BookList = () => {
    return <>
            {books.map((book) => {
            const [src, author, title] = book;
            return <div className='book'>
                <img src={src} alt="" />
                <h2>{author}</h2>
                <h4>{title}</h4>
                </div>
})}
            </>
    
}


function BestSellers() {
    return (
        <>
        <h2 className='title'>Best Sellers</h2>
        <div className='best-sellers'>
            <Book/>
        </div>
        </>
    )
}

ReactDOM.render(
        <BestSellers />,
    document.getElementById('root')
)