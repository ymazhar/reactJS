import React, {Component} from 'react';
import "./normalize.scss";
import "./app.scss";
import HeroContainer from "../../containers/hero-container";
import MainHeader from "../../shared/main-header";
import MainFooter from "../../shared/main-footer";
import MainLogo from "../main-logo";
import MovieList from "../movie-list";
import ResultsContainer from "../../containers/results-container";
import ErrorBoundary from "../error-boundary";
import AddMovieModal from "../../containers/add-movie-modal";

const movies = [
    {
        image: {
            src: 'https://via.placeholder.com/328x458',
            alt: 'placeholder'
        },
        title: 'Pulp Fiction',
        releaseDate: '2004',
        genre: 'Action & Adventure'
    },
    {
        image: {
            src: 'https://via.placeholder.com/328x458',
            alt: 'placeholder'
        },
        title: 'Pulp Fiction',
        releaseDate: '2004',
        genre: 'Action & Adventure'
    },
    {
        image: {
            src: 'https://via.placeholder.com/328x458',
            alt: 'placeholder'
        },
        title: 'Pulp Fiction',
        releaseDate: '2004',
        genre: 'Action & Adventure'
    },
    {
        image: {
            src: 'https://via.placeholder.com/328x458',
            alt: 'placeholder'
        },
        title: 'Pulp Fiction',
        releaseDate: '2004',
        genre: 'Action & Adventure'
    }
];
const mokeResultsFilter = [
    {
        title: "All",
        link: "/",
        active: true
    },
    {
        title: "Documentary",
        link: "/documentary",
        active: false
    },
    {
        title: "Comedy",
        link: "/link",
        active: false
    },
    {
        title: "Horror",
        link: "/horror",
        active: false
    },
    {
        title: "Crime",
        link: "/crime",
        active: false
    }
];

class App extends Component {
    state = {
        modal:{
            addMovie: {
                title: "Add movie",
                isOpen: false
            }
        }
    }
    openAddMovieModal = (e) => {
        e.preventDefault();

        this.setState((prevState) => {
            return {
                ...prevState,
                modal: {
                    ...prevState.modal,
                    addMovie: {
                        ...prevState.modal.addMovie,
                        isOpen: true
                    }
                }
            }
        })
    }

    handleSubmit = () => {
        console.log("Submit")
    }

    handleReset = () => {
        console.log("Reset")
    }

    handleClose = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                modal: {
                    ...prevState.modal,
                    addMovie: {
                        ...prevState.modal.addMovie,
                        isOpen: false
                    }
                }
            }
        });
    }

    render() {
        return (
            <div className={"site"}>
                <MainHeader toggleAddMovie={(e) => this.openAddMovieModal(e)}/>
                <HeroContainer/>
                <main className={"site__main"}>
                    <div className={"main-container"}>
                        <ErrorBoundary isEveryThingOk>
                            <ResultsContainer mokeResultsFilter={mokeResultsFilter} movies={movies}/>
                            <MovieList movies={movies}/>
                        </ErrorBoundary>
                    </div>
                </main>
                <MainFooter>
                    <div className={"main-container"}>
                        <MainLogo/>
                    </div>
                </MainFooter>
                <AddMovieModal title={this.state.modal.addMovie.title} isOpen={this.state.modal.addMovie.isOpen} onReset={this.handleReset}
                               onSubmit={this.handleSubmit} onClose={this.handleClose}/>
            </div>
        )
    }
}

export default App;