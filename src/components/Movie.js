import React from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({id,year, title, summary, poster, geners}) {
    return (
     <Link to={{
         pathname:"/movie-detail",
         state:{
             id,
            year,
            title,
            summary,
            poster,
            geners
         }
     }}>
    <div className="movie">
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
         
     </Link>
)
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