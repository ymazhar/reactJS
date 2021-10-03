import "./movie-detail-info.scss";
import PropTypes from "prop-types";

const MovieDetailInfo = ({movie}) => {
    const {poster_path, title, release_date, vote_average, runtime, overview} = movie;
    return (
        <div className="movie-detail-info">
            <div className="movie-detail-info__img-holder">
                <picture>
                    <source srcSet={poster_path} />
                    <img src='https://via.placeholder.com/328x458' alt={title}/>
                </picture>
            </div>
            <div className="movie-detail-info__content">
                <h2 className="movie-detail-info__title">{title}
                    <div className="movie-detail-info__rating">{vote_average}</div>
                </h2>
                <div className="movie-detail-info__sub">Oscar winning Movie</div>
                <div className="movie-detail-info__time">
                    <div className="movie-detail-info__time__item">{release_date}</div>
                    <div className="movie-detail-info__time__item">{runtime}</div>
                </div>
                <div className="movie-detail-info__overview">{overview}</div>
            </div>
        </div>
    )
}

MovieDetailInfo.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string,
        release_date: PropTypes.string,
        runtime: PropTypes.number,
        overview: PropTypes.string,
        vote_average: PropTypes.number
    })
}

MovieDetailInfo.defaultProps = {
    poster_path: "",
    title: "",
    release_date: "",
    runtime: "",
    overview: "",
    vote_average: 0
}

export default MovieDetailInfo;