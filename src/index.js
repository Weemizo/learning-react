import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Book = ({src, title, author}) => {
    return (
        <div className='book'>
            <img src={src} alt="" /> 
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>
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
        <BestSellers />,
    document.getElementById('root')
)