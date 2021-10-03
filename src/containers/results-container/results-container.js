import "./results-container.scss";
import MoviesFilter from "../../components/movies-filter";
import MoviesSort from "../../components/movies-sort";
import {useContext, useEffect, useState} from "react";
import {getMoviesError, getMoviesRequest, getMoviesSuccess} from "../../actions";
import {useDispatch} from "react-redux";
import MoviesServiceContext from "../../components/movies-service-context";

const ResultsContainer = () => {
    const dispatch = useDispatch();
    const movieService = useContext(MoviesServiceContext);
    const [sortValue, setSortValue] = useState('release_date');
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Documentary", "Comedy", "Horror", "Crime"];

    useEffect(() => {
        dispatch(getMoviesRequest())
        movieService.getMoviesWithParams(getParams())
            .then(data => dispatch(getMoviesSuccess(data)))
            .catch(error => dispatch(getMoviesError(error)))
    }, [activeFilter, sortValue]);

    const getParams = () => {
        const sortParam = sortValue.toLowerCase();
        const filterParam = activeFilter.toLowerCase();
        if(activeFilter === 'All') {
            return `sortBy=${sortParam}`;
        }
        return `sortBy=${sortParam}&filter=${filterParam}`
    }

    const handleOnChange = (e) => {
        setSortValue(e.target.value);
    }

    const handleActiveFilter = (e) => {
        setActiveFilter(e.target.value);
    }

    return (
        <div className={"results-container"}>
            <MoviesFilter filters={filters} handleActiveFilter={handleActiveFilter} active={activeFilter}/>
            <MoviesSort value={sortValue} handleOnChange={handleOnChange}/>
        </div>
    );
};

export default ResultsContainer;
