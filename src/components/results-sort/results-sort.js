import "./results-sort.scss";

const ResultsSort = () => {
  return (
    <div className={"result-sort"}>
      <span className={"result-sort__title"}>Sort by</span>
      <div className={"result-sort__dropdown"}>
        <select name="resultSort" id="resultSort">
          <option value="Release Date">Release Date</option>
          <option value="Release Date2">Release Date2</option>
          <option value="Release Date3">Release Date3</option>
        </select>
        <span className={"icon-arrow-down"} />
      </div>
    </div>
  );
};

export default ResultsSort;
