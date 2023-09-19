import React from 'react'
import error404 from '../../Assets/404.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='wrapper'>
            <img src={error404} />
            <h1>Page Not Found</h1>
            <p>The page you are trying to reach doesn't exist or has been moved.<br/>Please check that the url is correct or return home.</p>
            <a href='/'>Return Home</a>
        </div>
    )
}

export default NotFound