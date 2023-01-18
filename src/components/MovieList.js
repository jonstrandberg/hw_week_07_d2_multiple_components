import React from 'react'
import Movies from './Movies' 

const MovieList = ({moviesProp}) => {

    const listOfFilms = moviesProp.map((movies) => {

        return (

            <Movies title={movies.title} link={movies.url}/>
        )
    })


    return (
        <>
        {listOfFilms}
        <p><a href="https://www.imdb.com/calendar/?region=gb" id='upcoming'>View more upcoming releases</a></p>

        </>
    )
}

export default MovieList