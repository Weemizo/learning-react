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

const BookList = ({ src, author, title }) => {
        return src ? (
                <div className='book'>
                    <img src={src} alt={title} />
                    <h2>{author}</h2>
                    <h4>{title}</h4>
                </div>
            ) : (
                <div className='book'>No props provided</div>
            )
}


function BestSellers() {
    return (
        <>
        <h2 className='title'>Best Sellers</h2>
        <div className='best-sellers'>
            <Book />
            <BookList src="logo192.png" author="Jan Macier" title='"Ksiazka roku 3"'/>
        </div>
        </>
    )
}

ReactDOM.render(
        <BestSellers />,
    document.getElementById('root')
)