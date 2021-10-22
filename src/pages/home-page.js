import MainHeader from "../shared/main-header";
import MainLogo from "../components/main-logo";
import AddMovie from "../components/add-movie";
import HeroContainer from "../containers/hero-container";
import MainBody from "../shared/main-body";
import MainFooter from "../shared/main-footer";
import Title from "../elements/title";
import MoviesContainer from "../containers/movies-container";
import ResultsContainer from "../containers/results-container";
import {useDispatch} from "react-redux";
import {
    showModalAddMovie,
} from "../actions/modalActions";
// import AddMovieContainer from "../containers/add-movie-container";
// import EditMovieContainer from "../containers/edit-movie-container";
// import DeleteMovieContainer from "../containers/delete-movie-container";
import SearchContainer from "../containers/search-container";

const HomePage = () => {
    const dispatch = useDispatch();

    const handleOpenModal = () => dispatch(showModalAddMovie());
    return (
        <div className="site">
            <MainHeader>
                <MainLogo/>
                <AddMovie onClick={handleOpenModal}/>
            </MainHeader>
            <HeroContainer>
                <div className={"hero-container__holder"}>
                    <Title text={"Find your movie"}/>
                    <SearchContainer />
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

export default HomePage;