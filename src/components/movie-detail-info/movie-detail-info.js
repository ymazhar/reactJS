import "./movie-detail-info.scss";
import PropTypes from "prop-types";

const MovieDetailInfo = ({movie}) => {
    return (
        <div className="movie-detail-info">
            <div className="movie-detail-info__img-holder">
                <img src={movie.image.src} alt={movie.image.alt}/>
            </div>
            <div className="movie-detail-info__content">
                <h2 className="movie-detail-info__title">{movie.title}
                    <div className="movie-detail-info__rating">{movie.rating}</div>
                </h2>
                <div className="movie-detail-info__sub">Oscar winning Movie</div>
                <div className="movie-detail-info__time">
                    <div className="movie-detail-info__time__item">{movie.releaseDate}</div>
                    <div className="movie-detail-info__time__item">{movie.runtime}</div>
                </div>
                <div className="movie-detail-info__overview">{movie.overview}</div>
            </div>
        </div>
    )
}

MovieDetailInfo.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string
        }),
        title: PropTypes.string,
        rating: PropTypes.string,
        releaseDate: PropTypes.string,
        runtime: PropTypes.string,
        overview: PropTypes.string
    })
}

MovieDetailInfo.defaultProps = {
    movie: {
        image: {
            src: "",
            alt: ""
        },
        title: "",
        rating: "",
        releaseDate: "",
        runtime: "",
        overview: ""
    }
}

export default MovieDetailInfo;