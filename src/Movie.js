import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({year, title, summary, poster, geners}) {
    return <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <ul className="movie__genres">
                {geners.map((e,i)=>{
                    return <li key={i}>{e}</li>
                })}
            </ul>
            <h5 className="movie__year">{year}year</h5>
            <p className="movie__summary">{summary.slice(0,180)}...</p>
        </div>

    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    geners: PropTypes
        .arrayOf(PropTypes.string)
        .isRequired
}

export default Movie;