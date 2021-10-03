import "normalize-scss/sass/normalize/_import-now.scss";
import "./app.scss";
import {useEffect, useState} from "react";
import Modal from "../modal";
import MovieForm from "../movie-form";
import Button from "../../elements/button";
import MainHeader from "../../shared/main-header";
import MainLogo from "../main-logo";
import AddMovie from "../add-movie";
import HeroContainer from "../../containers/hero-container";
import Title from "../../elements/title";
import Search from "../search";
import MainBody from "../../shared/main-body";
import ErrorBoundary from "../error-boundary";
import ResultsContainer from "../../containers/results-container";
import MovieList from "../movie-list";
import MainFooter from "../../shared/main-footer";
import SearchButton from "../search-button";
import MovieDetailInfo from "../movie-detail-info";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [filters, setFilters] = useState([]);
    const [modals, setModals] = useState({
        addMovie: {
            title: "Add movie",
            isOpen: false,
            id: "addMovie",
        },
        editMovie: {
            title: "Edit movie",
            isOpen: false,
            id: "editMovie",
        },
        deleteMovie: {
            title: "Delete movie",
            isOpen: false,
            id: "deleteMovie",
        },
    });
    const [forms, setForms] = useState({
        movieForm: {
            movieId: {
                id: "movieId",
                name: "movieId",
                placeholder: "Movie id",
                defaultValue: "",
                value: "",
                label: "Movie ID",
            },
            movieTitle: {
                id: "movieTitle",
                name: "movie title",
                placeholder: "Add movie title",
                defaultValue: "",
                value: "",
                label: "Title",
            },
            releaseDate: {
                id: "releaseDate",
                placeholder: "Select Date",
                name: "release date",
                defaultValue: "",
                value: "",
                label: "Release date",
            },
            movieUrl: {
                id: "movieUrl",
                name: "movie url",
                placeholder: "Movie Url Here",
                defaultValue: "",
                value: "",
                label: "Movie Url",
            },
            genre: {
                id: "genre",
                name: "genre",
                options: [
                    {
                        value: "comedy",
                        id: "1",
                        name: "comedy",
                    },
                    {
                        value: "Sort",
                        id: "2",
                        name: "Sort 2",
                    },
                    {
                        value: "Sort3",
                        id: "3",
                        name: "Sort 3",
                    },
                ],
                defaultValue: "",
                value: "",
                label: "Genre",
            },
            overview: {
                id: "overview",
                name: "overview",
                placeholder: "Overview text goes here",
                text: "Overview text goes here",
                defaultValue: "",
                value: "",
                label: "Overview",
            },
            runtime: {
                id: "runtime",
                name: "runtime",
                placeholder: "Runtime here",
                text: "Runtime here",
                defaultValue: "",
                value: "",
                label: "Runtime",
            },
        },
        movieEditForm: {},
    });
    const [removeMovieId, setRemoveMovieId] = useState(null);
    const [editMovieId, setEditMovieId] = useState(null);
    const [showEditPage, setShowEditPage] = useState(false);
    const [editMovieItem, setEditMovieItem] = useState({});

    useEffect(() => {
        fetch('/db.json')
            .then(res => res.json())
            .then(data => {
                setMovies(data.movies);
                setFilters(data.filters);
            });
    }, []);

    const handleSave = () => {
        const {movieEditForm} = forms;
        const {genre, movieId, overview, movieTitle, runtime, movieUrl, releaseDate} = movieEditForm;

        const movieItems = movies.map((movie) => {
            if (movie.id === editMovieId) {
                return {
                    ...movie,
                    genre: genre.value,
                    id: movieId.value,
                    overview: overview.value,
                    title: movieTitle.value,
                    runtime: runtime.value,
                    image: {
                        src: movieUrl.value
                    },
                    releaseDate: releaseDate.value
                };
            }

            return movie;
        });
        setMovies(movieItems);
        setModals((prevState) => {
            return {
                ...prevState,
                editMovie: {
                    ...prevState.editMovie,
                    isOpen: false,
                }
            }
        });
    };

    const handleConfirm = () => {
        const movieItems = movies.filter(
            (movie) => movie.id !== removeMovieId
        );
        setMovies(movieItems);
        setModals((prevState) => {
            return {
                ...prevState,
                deleteMovie: {
                    ...prevState.deleteMovie,
                    isOpen: false,
                }
            }
        });
    };

    const handleCloseModal = (e) => {
        setModals((prevState) => {
            return {
                ...prevState,
                [e.target.dataset.modalId]: {
                    ...prevState[e.target.dataset.modalId],
                    isOpen: false,
                }
            }
        })
    };

    const handleOpenModal = (e, id) => {
        e.preventDefault();
        const idModal = e.target.dataset.modalId || id;
        setModals((prevState) => {
            return {
                ...prevState,
                [idModal]: {
                    ...prevState[idModal],
                    isOpen: true,
                },
            }
        })
    };

    const handleInputChange = (event, form) => {
        setForms((prevState) => {
            return {
                ...prevState,
                [form]: {
                    ...prevState[form],
                    [event.target.id]: {
                        ...prevState[form][event.target.id],
                        value: event.target.value,
                    },
                }
            };
        })
    };

    const handleReset = (form) => {
        setForms((prevState) => {
            return {
                ...prevState,
                [form]: {
                    ...prevState[form],
                    movieId: {
                        ...prevState[form].movieId,
                        value: prevState[form].movieId.defaultValue,
                    },
                    movieTitle: {
                        ...prevState[form].movieTitle,
                        value: prevState[form].movieTitle.defaultValue,
                    },
                    releaseDate: {
                        ...prevState[form].releaseDate,
                        defaultValue: prevState[form].releaseDate.defaultValue,
                    },
                    genre: {
                        ...prevState[form].genre,
                        value: prevState[form].genre.defaultValue,
                    },
                    overview: {
                        ...prevState[form].overview,
                        value: prevState[form].overview.defaultValue,
                    },
                    runtime: {
                        ...prevState[form].runtime,
                        value: prevState[form].runtime.defaultValue,
                    },
                }
            }
        })
    };

    const handleSubmit = () => {
        const addMovie = {
            image: {
                src: forms.movieForm.movieUrl.value,
                alt: "placeholder",
            },
            title: forms.movieForm.movieTitle.value,
            releaseDate: forms.movieForm.releaseDate.value,
            genre: forms.movieForm.genre.value,
            id: forms.movieForm.movieId.value,
            overview: forms.movieForm.overview.value,
            runtime: forms.movieForm.runtime.value,
        };

        setModals((prevState) => {
            return {
                ...prevState,
                addMovie: {
                    ...prevState.addMovie,
                    isOpen: false,
                },
            }
        });

        setMovies((prevState) => [...prevState, addMovie]);
    };

    const handleEditMovieClick = (id) => {
        const movie = movies.find((movie) => movie.id === id);
        setForms((prevState) => {
            return {
                ...prevState,
                movieEditForm: {
                    ...prevState.movieForm,
                    movieId: {
                        ...prevState.movieForm.movieId,
                        value: movie.id,
                        defaultValue: movie.id,
                    },
                    movieTitle: {
                        ...prevState.movieForm.movieTitle,
                        value: movie.title,
                        defaultValue: movie.title,
                    },
                    releaseDate: {
                        ...prevState.movieForm.releaseDate,
                        value: movie.releaseDate,
                        defaultValue: movie.releaseDate,
                    },
                    genre: {
                        ...prevState.movieForm.genre,
                        value: movie.genre,
                        defaultValue: movie.genre,
                    },
                    overview: {
                        ...prevState.movieForm.overview,
                        value: movie.overview,
                        defaultValue: movie.overview,
                    },
                    runtime: {
                        ...prevState.movieForm.runtime,
                        value: movie.runtime,
                        defaultValue: movie.runtime,
                    },
                    movieUrl: {
                        ...prevState.movieForm.movieUrl,
                        value: movie.image.src,
                        defaultValue: movie.image.src,
                    }
                },
            };
        });
        setEditMovieId(id);
        setModals((prevState) => {
            return {
                ...prevState,
                editMovie: {
                    ...prevState.editMovie,
                    isOpen: true,
                },
            }
        })
    }

    const handleDeleteMovieClick = (id) => {
        setRemoveMovieId(id);
        setModals((prevState) => {
            return {
                ...prevState,
                deleteMovie: {
                    ...prevState.deleteMovie,
                    isOpen: true,
                }
            }
        });
    }

    const handleMovieItemClick = (e) => {
        const movieId = e.target.closest('.movie-item').id;
        const movie = movies.find((item) => {
            return item && item.id === movieId
        });
        setEditMovieItem(movie);
        setShowEditPage(true);
    }

    const handleSearchButtonClick = () => {
        setShowEditPage(false);
    }

    const homeHero = () => {
        return (
            <>
                <Title text={"Find your movie"}/>
                <Search/>
            </>)
    }

    const {addMovie, deleteMovie, editMovie} = modals;
    const {movieForm, movieEditForm} = forms;
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
                        showEditPage ?  <MovieDetailInfo movie={editMovieItem}/> : homeHero()
                    }

                </div>
            </HeroContainer>
            <MainBody>
                <ErrorBoundary>
                    <ResultsContainer filters={filters}/>
                    <MovieList movies={movies}
                               handleDeleteMovieClick={handleDeleteMovieClick}
                               handleEditMovieClick={handleEditMovieClick} onClick={handleMovieItemClick}/>
                </ErrorBoundary>
            </MainBody>
            <MainFooter>
                <div className="main-container">
                    <MainLogo/>
                </div>
            </MainFooter>
            <Modal
                title={addMovie.title}
                isOpen={addMovie.isOpen}
                onClose={handleCloseModal}
                id={addMovie.id}
            >
                <div className="modal__body">
                    <MovieForm
                        form={movieForm}
                        handleInputChange={(e) => handleInputChange(e, "movieForm")}
                    />
                </div>
                <div className="modal__footer">
                    <Button onClick={() => handleReset("movieForm")} secondary>
                        Reset
                    </Button>
                    <Button onClick={handleSubmit} primary>Submit</Button>
                </div>
            </Modal>
            <Modal
                title={editMovie.title}
                isOpen={editMovie.isOpen}
                id={editMovie.id}
                onClose={handleCloseModal}
            >
                <div className="modal__body">
                    <MovieForm
                        form={movieEditForm}
                        handleInputChange={(e) =>
                            handleInputChange(e, "movieEditForm")
                        }
                    />
                </div>
                <div className="modal__footer">
                    <Button onClick={() => handleReset("movieEditForm")} secondary>
                        Reset
                    </Button>
                    <Button onClick={handleSave} primary>Save</Button>
                </div>
            </Modal>
            <Modal
                title={deleteMovie.title}
                isOpen={deleteMovie.isOpen}
                id={deleteMovie.id}
                onClose={handleCloseModal}
            >
                <div className="modal__body">
                    <p>Are you sure you want to delete this movie?</p>
                </div>
                <div className="modal__footer">
                    <Button onClick={handleConfirm} primary>Confirm</Button>
                </div>
            </Modal>
        </div>
    );
}

export default App;
