import MainHeader from "../shared/main-header";
import MainLogo from "../components/main-logo";
import HeroContainer from "../containers/hero-container";
import MainBody from "../shared/main-body";
import MainFooter from "../shared/main-footer";
import MoviesContainer from "../containers/movies-container";
import ResultsContainer from "../containers/results-container";
import {useDispatch} from "react-redux";
// import AddMovieContainer from "../containers/add-movie-container";
// import EditMovieContainer from "../containers/edit-movie-container";
// import DeleteMovieContainer from "../containers/delete-movie-container";
import MovieDetailInfo from "../components/movie-detail-info";
import {useHistory, useParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchMovieById} from "../actions/moviesActions";
import {getFilmItemSelector} from "../selectors/movieSelectors";
import SearchButton from "../components/search-button";

const FilmPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const movieItem = getFilmItemSelector();

    useEffect(() => {
        dispatch(fetchMovieById(+id))
    }, [id])

    const handleSearchButtonClick = () => {
        history.push('/');
    }
    return (
        <div className="site">
            <MainHeader>
                <MainLogo/>
                <SearchButton onClick={handleSearchButtonClick}/>
            </MainHeader>
            <HeroContainer darkBlur>
                <div className={"hero-container__holder"}>
                    {movieItem ? <MovieDetailInfo movie={movieItem}/> : {}}
                </div>
            </HeroContainer>
            <MainBody>
                <ResultsContainer />
                <MoviesContainer />
            </MainBody>
            <MainFooter>
                <div className="main-container">
                    <MainLogo/>
                </div>
            </MainFooter>
            {/*<AddMovieContainer />*/}
            {/*<EditMovieContainer />*/}
            {/*<DeleteMovieContainer />*/}
        </div>
    )
}

export default FilmPage;