import "./movies-container.scss";
import MovieList from "../../components/movie-list";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/errorIndicator";
import MoviesCount from "../../components/movies-count";
import {
    setDeleteMovieId,
    setEditMovieId,
    showEditMoviePage,
    showModalDeleteMovie,
    showModalEditMovie
} from "../../actions";

const MoviesContainer = () => {
    const dispatch = useDispatch();
    const movies = useSelector(({movies}) => movies);
    const loading = useSelector(({loading}) => loading);
    const error = useSelector(({error}) => error);
    const {totalAmount, data} = movies;

    const handleEditMovieClick = (id) => {
        dispatch(setEditMovieId(id));
        dispatch(showModalEditMovie());
    }

    const handleDeleteMovieClick = (id) => {
        dispatch(setDeleteMovieId(id));
        dispatch(showModalDeleteMovie())
    }

    const handleMovieItemClick = (e) => {
        const movieId = Number(e.target.closest('.movie-item').id);
        const {data} = movies;
        const movie = data.find((item) => {
            return item && item.id === movieId
        });
        dispatch(showEditMoviePage(movie))
    }

    if (loading) {
        return <Spinner/>
    }
    if (error) {
        return <ErrorIndicator/>
    }

    return (
        <>
            <MoviesCount count={totalAmount}/>
            <MovieList
                movies={data}
                handleDeleteMovieClick={handleDeleteMovieClick}
                handleEditMovieClick={handleEditMovieClick}
                onClick={handleMovieItemClick}/>
        </>
    );
};

export default MoviesContainer;
