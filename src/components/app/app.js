import { Component } from "react";
import "normalize-scss/sass/normalize/_import-now.scss";
import "./app.scss";
import HeroContainer from "../../containers/hero-container";
import MainHeader from "../../shared/main-header";
import MainFooter from "../../shared/main-footer";
import MainLogo from "../main-logo";
import MovieList from "../movie-list";
import ResultsContainer from "../../containers/results-container";
import ErrorBoundary from "../error-boundary";
import Modal from "../modal";
import Button from "../../elements/button";
import MovieForm from "../movie-form";

class App extends Component {
  state = {
    movies: [
      {
        image: {
          src: "https://via.placeholder.com/328x458",
          alt: "placeholder",
        },
        title: "Pulp Fiction",
        releaseDate: "2004-08-31",
        genre: "Action & Adventure",
        id: "MO32820TH",
        overview: "",
        runtime: "",
      },
      {
        image: {
          src: "https://via.placeholder.com/328x458",
          alt: "placeholder",
        },
        title: "Pulp Fiction 2",
        releaseDate: "2004-08-31",
        genre: "comedy",
        id: "MO32821TH",
        overview: "",
        runtime: "",
      },
      {
        image: {
          src: "https://via.placeholder.com/328x458",
          alt: "placeholder",
        },
        title: "Pulp Fiction 3",
        releaseDate: "2004-08-31",
        genre: "Action & Adventure",
        id: "MO32822TH",
        overview: "",
        runtime: "",
      },
      {
        image: {
          src: "https://via.placeholder.com/328x458",
          alt: "placeholder",
        },
        title: "Pulp Fiction 4",
        releaseDate: "2004-08-31",
        genre: "Action & Adventure",
        id: "MO32823TH",
        overview: "",
        runtime: "",
      },
    ],
    movieActionBox: {
      isVisible: false,
    },
    modal: {
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
    },
    filters: [
      {
        title: "All",
        link: "/",
        active: true,
      },
      {
        title: "Documentary",
        link: "/documentary",
        active: false,
      },
      {
        title: "Comedy",
        link: "/link",
        active: false,
      },
      {
        title: "Horror",
        link: "/horror",
        active: false,
      },
      {
        title: "Crime",
        link: "/crime",
        active: false,
      },
    ],
    forms: {
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
    },
    removeMovieId: null,
    editMovieId: null,
  };

  handleCloseModal = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        modal: {
          ...prevState.modal,
          [e.target.dataset.modalId]: {
            ...prevState.modal[e.target.dataset.modalId],
            isOpen: false,
          },
        },
      };
    });
  };

  handleOpenModal = (e, id) => {
    e.preventDefault();
    const idModal = e.target.dataset.modalId || id;
    this.setState((prevState) => {
      return {
        ...prevState,
        modal: {
          ...prevState.modal,
          [idModal]: {
            ...prevState.modal[idModal],
            isOpen: true,
          },
        },
      };
    });
  };

  handleSubmit = () => {
    const addMovie = {
      image: {
        src: this.state.forms.movieForm.movieUrl.value,
        alt: "placeholder",
      },
      title: this.state.forms.movieForm.movieTitle.value,
      releaseDate: this.state.forms.movieForm.releaseDate.value,
      genre: this.state.forms.movieForm.genre.value,
      id: this.state.forms.movieForm.movieId.value,
      overview: this.state.forms.movieForm.overview.value,
      runtime: this.state.forms.movieForm.runtime.value,
    };

    this.setState((prevState) => {
      return {
        ...prevState,
        movies: [...prevState.movies, addMovie],
        modal: {
          ...prevState.modal,
          addMovie: {
            ...prevState.modal.addMovie,
            isOpen: false,
          },
        },
      };
    });
  };

  handleReset = (form) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        forms: {
          ...prevState.forms,
          [form]: {
            ...prevState.forms[form],
            movieId: {
              ...prevState.forms[form].movieId,
              value: prevState.forms[form].movieId.defaultValue,
            },
            movieTitle: {
              ...prevState.forms[form].movieTitle,
              value: prevState.forms[form].movieTitle.defaultValue,
            },
            releaseDate: {
              ...prevState.forms[form].releaseDate,
              defaultValue: prevState.forms[form].releaseDate.defaultValue,
            },
            genre: {
              ...prevState.forms[form].genre,
              value: prevState.forms[form].genre.defaultValue,
            },
            overview: {
              ...prevState.forms[form].overview,
              value: prevState.forms[form].overview.defaultValue,
            },
            runtime: {
              ...prevState.forms[form].runtime,
              value: prevState.forms[form].runtime.defaultValue,
            },
          },
        },
      };
    });
  };

  handleSave = () => {
    const movies = this.state.movies.map((movie) => {
      if (movie.id === this.state.editMovieId) {
        return {
          ...movie,
          id: this.state.forms.movieEditForm.movieId.value,
          title: this.state.forms.movieEditForm.movieTitle.value,
          overview: this.state.forms.movieEditForm.overview.value,
          runtime: this.state.forms.movieEditForm.runtime.value,
        };
      }

      return movie;
    });

    this.setState((prevState) => {
      return {
        ...prevState,
        movies,
        modal: {
          ...prevState.modal,
          editMovie: {
            ...prevState.modal.editMovie,
            isOpen: false,
          },
        },
        movieActionBox: {
          isVisible: false,
        },
      };
    });
  };

  handleConfirm = () => {
    const movies = this.state.movies.filter(
      (movie) => movie.id !== this.state.removeMovieId
    );
    this.setState((prevState) => {
      return {
        ...prevState,
        movies,
        modal: {
          ...prevState.modal,
          deleteMovie: {
            ...prevState.modal.deleteMovie,
            isOpen: false,
          },
        },
      };
    });
  };

  setMovieToEditForm = (id) => {
    const movie = this.state.movies.find((movie) => movie.id === id);

    this.setState((prevState) => {
      return {
        ...prevState,
        forms: {
          ...prevState.forms,
          movieEditForm: {
            ...prevState.forms.movieForm,
            movieId: {
              ...prevState.forms.movieForm.movieId,
              value: movie.id,
              defaultValue: movie.id,
            },
            movieTitle: {
              ...prevState.forms.movieForm.movieTitle,
              value: movie.title,
              defaultValue: movie.title,
            },
            releaseDate: {
              ...prevState.forms.movieForm.releaseDate,
              value: movie.releaseDate,
              defaultValue: movie.releaseDate,
            },
            genre: {
              ...prevState.forms.movieForm.genre,
              value: movie.genre,
              defaultValue: movie.genre,
            },
            overview: {
              ...prevState.forms.movieForm.overview,
              value: movie.overview,
              defaultValue: movie.overview,
            },
            runtime: {
              ...prevState.forms.movieForm.runtime,
              value: movie.runtime,
              defaultValue: movie.runtime,
            },
          },
        },
        editMovieId: id,
      };
    });
  };

  handleMovieItemClick = (e) => {
    switch (e.target.dataset.movieAction) {
      case "show":
        this.setState({
          movieActionBox: {
            isVisible: true,
            activeId: e.currentTarget.id,
          },
        });
        break;
      case "close":
        this.setState({
          movieActionBox: {
            isVisible: false,
            activeId: e.currentTarget.id,
          },
        });
        break;
      case "delete":
        this.handleOpenModal(e, "deleteMovie");
        this.setState({
          removeMovieId: e.currentTarget.id,
        });
        break;
      case "edit":
        this.setMovieToEditForm(e.currentTarget.id);
        this.handleOpenModal(e, "editMovie");
        break;
      default:
        this.setState({
          movieActionBox: {
            isVisible: false,
            activeId: null,
          },
        });
    }
  };

  handleInputChange = (event, form) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        forms: {
          ...prevState.forms,
          [form]: {
            ...prevState.forms[form],
            [event.target.id]: {
              ...prevState.forms[form][event.target.id],
              value: event.target.value,
            },
          },
        },
      };
    });
  };

  render() {
    const { filters, movies, movieActionBox, modal, forms } = this.state;
    const { addMovie, deleteMovie, editMovie } = modal;
    const { movieForm, movieEditForm } = forms;
    return (
      <div className="site">
        <MainHeader toggleAddMovieModal={this.handleOpenModal} />
        <HeroContainer />
        <main className="site__main">
          <div className="main-container">
            <ErrorBoundary isEveryThingOk>
              <ResultsContainer filters={filters} movies={movies} />
              <MovieList
                movies={movies}
                onClick={this.handleMovieItemClick}
                movieActionBox={movieActionBox}
              />
            </ErrorBoundary>
          </div>
        </main>
        <MainFooter>
          <div className="main-container">
            <MainLogo />
          </div>
        </MainFooter>

        <Modal
          title={addMovie.title}
          isOpen={addMovie.isOpen}
          onClose={this.handleCloseModal}
          id={addMovie.id}
        >
          <div className="modal__body">
            <MovieForm
              form={movieForm}
              handleInputChange={(e) => this.handleInputChange(e, "movieForm")}
            />
          </div>
          <div className="modal__footer">
            <Button onClick={() => this.handleReset("movieForm")} inverted>
              Reset
            </Button>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </div>
        </Modal>
        <Modal
          title={editMovie.title}
          isOpen={editMovie.isOpen}
          id={editMovie.id}
          onClose={this.handleCloseModal}
        >
          <div className="modal__body">
            <MovieForm
              form={movieEditForm}
              handleInputChange={(e) =>
                this.handleInputChange(e, "movieEditForm")
              }
            />
          </div>
          <div className="modal__footer">
            <Button onClick={() => this.handleReset("movieEditForm")} inverted>
              Reset
            </Button>
            <Button onClick={this.handleSave}>Save</Button>
          </div>
        </Modal>
        <Modal
          title={deleteMovie.title}
          isOpen={deleteMovie.isOpen}
          id={deleteMovie.id}
          onClose={this.handleCloseModal}
        >
          <div className="modal__body">
            <p>Are you sure you want to delete this movie?</p>
          </div>
          <div className="modal__footer">
            <Button onClick={this.handleConfirm}>Confirm</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
