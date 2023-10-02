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

const Title = ({title}) => {
    return (
        <div>
            <h6>
                {title}
            </h6>
        </div>
    )
}

const Author = ({ author }) => {
    return (
        <div>
            {author}
        </div>
    )
}

const Book = ({ src, title, author}) => {
    return (
        <div>
            <Image src={src} />
            <Title  title={title} />
            <Author author={author} />
        </div>
    )
}


function BestSellers() {
    return (
        <>
            <h2>Best Sellers</h2>
            <Book src='logo192.png' title='huj' author='lmao'/>
            <Book src='logo192.png' title='XD' author='lmao'/>
        </>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <BestSellers />
    </React.StrictMode>,
    document.getElementById('root')
)