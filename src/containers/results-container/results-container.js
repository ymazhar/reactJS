import "./results-container.scss";
import MoviesFilter from "../../components/movies-filter";
import MoviesSort from "../../components/movies-sort";
import {filterByGenres, sortByMovies} from "../../actions/moviesActions";
import {useDispatch} from "react-redux";
import {getActiveFilterSelector, getFiltersSelector, getSortByFilterSelector} from "../../selectors/filterSelectors";

const ResultsContainer = () => {
    const dispatch = useDispatch();
    const filters = getFiltersSelector();
    const sortValue = getSortByFilterSelector();
    const activeFilter = getActiveFilterSelector();


    // const getParams = () => {
    //     const sortParam = sortValue.toLowerCase();
    //     const filterParam = activeFilter.toLowerCase();
    //     if(activeFilter === 'All') {
    //         return `sortBy=${sortParam}`;
    //     }
    //     return `sortBy=${sortParam}&filter=${filterParam}`
    // }

    const handleSortBy = (e) => {
        if(!e.target.value) {
            return
        }
        dispatch(sortByMovies(e.target.value))
    }

    const handleActiveFilter = (e) => {
        if(!e.target.value) {
            return
        }
        dispatch(filterByGenres(e.target.value))
    }

    return (
        <div className={"results-container"}>
            <MoviesFilter filters={filters} handleActiveFilter={handleActiveFilter} active={activeFilter}/>
            <MoviesSort value={sortValue} handleOnChange={handleSortBy}/>
        </div>
    );
};

export default ResultsContainer;
