import MainHeader from "../shared/main-header";
import MainLogo from "../components/main-logo";
import AddMovie from "../components/add-movie";
import HeroContainer from "../containers/hero-container";
import MainBody from "../shared/main-body";
import MainFooter from "../shared/main-footer";
import SearchButton from "../components/search-button";
import MovieDetailInfo from "../components/movie-detail-info";
import Title from "../elements/title";
import MoviesContainer from "../containers/movies-container";
import ResultsContainer from "../containers/results-container";
import {useDispatch, useSelector} from "react-redux";
import {
    hideEditMoviePage,
    showModalAddMovie,
} from "../actions";
import AddMovieContainer from "../containers/add-movie-container";
import EditMovieContainer from "../containers/edit-movie-container";
import DeleteMovieContainer from "../containers/delete-movie-container";
import SearchContainer from "../containers/search-container";

const HomePage = () => {
    const dispatch = useDispatch();
    const movieItem = useSelector(({movieItem}) => movieItem);
    const showEditPage = useSelector(({showEditMoviePage}) => showEditMoviePage);

    const handleOpenModal = () => dispatch(showModalAddMovie());

    const handleSearchButtonClick = () => {
        dispatch(hideEditMoviePage());
    }

    const homeHero = () => {
        return (
            <>
                <Title text={"Find your movie"}/>
                <SearchContainer />
            </>)
    }

    return (
        <div className="site">
            <MainHeader>
                <MainLogo/>
                {
                    showEditPage ? <SearchButton onClick={handleSearchButtonClick}/> : <AddMovie onClick={handleOpenModal}/>
                }

            </MainHeader>
            <HeroContainer darkBlur={showEditPage}>
                <div className={"hero-container__holder"}>
                    {
                        showEditPage ?  <MovieDetailInfo movie={movieItem}/> : homeHero()
                    }

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
            <AddMovieContainer />
            <EditMovieContainer />
            <DeleteMovieContainer />
        </div>
    )
}

export default HomePage;