import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Image = ({ src }) => {
    return (
        <div>
            <img src={src} alt="" /> 
        </div>
    )
}

const Title = ({ title }) => {
    return (
        <div>
            {title}
        </div>
    )
}

const Author = ({ author }) => {
    return (
        <div>
            <h6>
                {author}
            </h6>
        </div>
    )
}

const Book = ({ src, title, author}) => {
    return (
        <div className='book'>
            <Image src={src} />
            <Title  title={title} />
            <Author author={author} />
        </div>
    )
}


function BestSellers() {
    return (
        <>
        <h2 className='title'>Best Sellers</h2>
        <div className='best-sellers'>
            <Book src='logo192.png' title='"Mega ksionzka roku"' author='nice autor'/>
            <Book src='logo192.png' title='"Super ksiazka"' author='swietny autor'/>
            <Book src='logo192.png' title='"Fantastyczna ksiazka"' author='mistrzowski autor'/>
        </div>
        </>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <BestSellers />
    </React.StrictMode>,
    document.getElementById('root')
)