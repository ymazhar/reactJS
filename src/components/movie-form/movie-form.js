import FormControl from "../form-control";
import Label from "../../elements/label";
import InputField from "../../elements/input-field";
import SelectField from "../../elements/select-field";

import "./movie-form.scss";
import PropTypes from "prop-types";

const MovieForm = ({ form, handleInputChange }) => {
  const {
    movieId,
    movieTitle,
    releaseDate,
    movieUrl,
    genre,
    overview,
    runtime,
  } = form;

  return (
    <form className={"movie-form"}>
      <FormControl>
        <Label id={movieId.id}>{movieId.label}</Label>
        <InputField
          name={movieId.name}
          id={movieId.id}
          placeholder={movieId.placeholder}
          value={movieId.value}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <Label id={movieTitle.id}>{movieTitle.label}</Label>
        <InputField
          name={movieTitle.name}
          id={movieTitle.id}
          placeholder={movieTitle.placeholder}
          value={movieTitle.value}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <Label id={releaseDate.id}>{releaseDate.label}</Label>
        <InputField
          type={"date"}
          name={releaseDate.name}
          id={releaseDate.id}
          placeholder={releaseDate.placeholder}
          value={releaseDate.value}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <Label id={movieUrl.id}>{movieUrl.label}</Label>
        <InputField
          name={movieUrl.name}
          id={movieUrl.id}
          placeholder={movieUrl.placeholder}
          value={movieUrl.value}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <Label id={genre.id}>{genre.label}</Label>
        <SelectField
          name={genre.name}
          id={genre.id}
          options={genre.options}
          className={"select-field-input"}
          value={genre.value}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <Label id={overview.id}>{overview.label}</Label>
        <InputField
          name={overview.name}
          id={overview.id}
          placeholder={overview.placeholder}
          value={overview.value}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <Label id={runtime.id}>{runtime.label}</Label>
        <InputField
          name={runtime.name}
          id={runtime.id}
          placeholder={runtime.placeholder}
          value={runtime.value}
          onChange={handleInputChange}
        />
      </FormControl>
    </form>
  );
};

MovieForm.propTypes = {
    form: PropTypes.object,
    handleInputChange: PropTypes.func,
};

MovieForm.defaultProps = {
    form: {},
    handleInputChange: () => {},
};

export default MovieForm;
