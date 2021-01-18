import React from "react";
import axios from "axios";
import Movie from "../components/Movie"
import "./Home.css"

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies, isLoading: false})
    }

    componentDidMount() {
        this.getMovies();
    }
    render() {
        const {isLoading, movies} = this.state
        return (
            <section className="container">
                <div className="loader">
                  <span className="loader__text"></span>
                </div>
                <div className="movies">
                    {isLoading
                            ? "Loading"
                            : movies.map(movie => {
                                console.log(movie);
                                return <Movie
                                    key={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    geners={movie.genres}
                                    />
                            })}
                </div>
            </section>
        )
    }
}

export default Home;