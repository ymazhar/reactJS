import "./movies-container.scss";
import MovieList from "../../components/movie-list";
import {useDispatch} from "react-redux";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/errorIndicator";
import MoviesCount from "../../components/movies-count";
import {
    setDeleteMovieId,
    setEditMovieId,
} from "../../actions/moviesActions";
import {
    showModalDeleteMovie,
    showModalEditMovie
} from "../../actions/modalActions"
import {
    errorSelector,
    getLoadingStateSelector,
    getMoviesSelector,
    getMoviesTotalCountSelector
} from "../../selectors/movieSelectors";
import NoMovieFound from "../../components/no-movie-found";
import {useHistory} from "react-router";
import {useCallback} from "react";

const MoviesContainer = () => {
    const dispatch = useDispatch();
    const movies = getMoviesSelector();
    const loading = getLoadingStateSelector();
    const error = errorSelector();
    const totalAmount = getMoviesTotalCountSelector();
    let history = useHistory();

    const handleEditMovieClick = useCallback((id) => {
        dispatch(setEditMovieId(id));
        dispatch(showModalEditMovie());
    }, [])

    const handleDeleteMovieClick = useCallback((id) => {
        dispatch(setDeleteMovieId(id));
        dispatch(showModalDeleteMovie())
    }, [])

    const handleMovieItemClick = useCallback((id) => {
        history.push(`/film/${id}`)
    }, [])

    if (loading) {
        return <Spinner/>
    }
    if (error) {
        return <ErrorIndicator/>
    }

    if(!movies) {
        return <NoMovieFound/>
    }

    return (
        <>
            <MoviesCount count={totalAmount}/>
            <MovieList
                movies={movies}
                handleDeleteMovieClick={handleDeleteMovieClick}
                handleEditMovieClick={handleEditMovieClick}
                onClick={handleMovieItemClick}/>
        </>
    );
};

export default MoviesContainer;
