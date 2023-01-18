import React from 'react'

const Movies = ({title, link}) => {
    return (
        <>
            <li><a href={link}> Title: {title}</a></li>
        </>
    )

}


export default Movies