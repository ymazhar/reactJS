import "./movies-sort.scss";
import PropTypes from "prop-types";

const MoviesSort = ({handleOnChange, value}) => {
    return (
        <div className={"movies-sort"}>
            <span className={"movies-sort__title"}>Sort by</span>
            <div className={"movies-sort__dropdown"}>
                <select name="moviesSort" id="moviesSort" onChange={handleOnChange} value={value}>
                    <option value="release_date">Release Date</option>
                    <option value="genres">Genre</option>
                    <option value="vote_average">Rating</option>
                </select>
                <span className={"icon-arrow-down"}/>
            </div>
        </div>
    );
};

MoviesSort.propTypes = {
    handleOnChange: PropTypes.func,
    value: PropTypes.string
}

MoviesSort.defaultProps = {
    handleOnChange: () => {},
    value: ""
}

export default MoviesSort;
