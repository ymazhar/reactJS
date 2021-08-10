import React from 'react';
import "./normalize.scss";
import "./app.scss";
import HeroContainer from "../../containers/hero-container";
import MainHeader from "../../shared/main-header";
import MainFooter from "../../shared/main-footer";
import MainLogo from "../main-logo";
import MovieList from "../movie-list";
import ResultsContainer from "../../containers/results-container";
import ErrorBoundary from "../error-boundary";

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
const App = () => {
    return (
        <div className={"site"}>
            <MainHeader/>
            <HeroContainer/>
            <main className={"site__main"}>
                <div className={"main-container"}>
                    <ErrorBoundary isEveryThingOk>
                        <ResultsContainer mokeResultsFilter={mokeResultsFilter} movies={movies}/>
                        <MovieList movies={movies} />
                    </ErrorBoundary>
                </div>
            </main>
            <MainFooter>
                <div className={"main-container"}>
                    <MainLogo/>
                </div>
            </MainFooter>
        </div>
    )
}

export default App;