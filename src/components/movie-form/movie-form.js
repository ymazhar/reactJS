import FormControl from "../form-control";
import Label from "../../elements/label";
import InputField from "../../elements/input-field";
import SelectField from "../../elements/select-field";
import "./movie-form.scss";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import Button from "../../elements/button";
import InputError from "../../elements/input-error";

const MovieForm = ({
                       edit,
                       values,
                       touched,
                       errors,
                       handleChange,
                       handleBlur,
                       handleSubmit,
                       handleReset,
                       setFieldValue,
                       setFieldTouched,
                       dirty,
                       isSubmitting,
                   }) => {
    const movieForm = useSelector(({forms}) => forms.movieForm);
    const {id, title, release_date, poster_path, genres, overview, runtime} = movieForm;

    const handleGenresChange = value => {
        setFieldValue('genres', value);
    };

    const handleGenresBlur = () => {
        setFieldTouched('genres', true);
    };

    return (
        <form className={"movie-form"} onSubmit={handleSubmit}>
            <FormControl>
                <Label id={id.id}>{id.label}</Label>
                <InputField
                    name={id.id}
                    id={id.id}
                    placeholder={id.placeholder}
                    value={values.id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.id && touched.id && (<InputError error={errors.id}/>)}
            </FormControl>
            <FormControl>
                <Label id={title.id}>{title.label}</Label>
                <InputField
                    name={title.name}
                    id={title.id}
                    placeholder={title.placeholder}
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.title && touched.title && (<InputError error={errors.title}/>)}
            </FormControl>
            <FormControl>
                <Label id={release_date.id}>{release_date.label}</Label>
                <InputField
                    type={"date"}
                    name={release_date.name}
                    id={release_date.id}
                    placeholder={release_date.placeholder}
                    value={values.release_date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.release_date && touched.release_date && (<InputError error={errors.release_date}/>)}
            </FormControl>
            <FormControl>
                <Label id={poster_path.id}>{poster_path.label}</Label>
                <InputField
                    name={poster_path.name}
                    id={poster_path.id}
                    placeholder={poster_path.placeholder}
                    value={values.poster_path}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.poster_path && touched.poster_path && (<InputError error={errors.poster_path}/>)}
            </FormControl>
            <FormControl>
                <Label id={genres.id}>{genres.label}</Label>
                <SelectField
                    multiple={true}
                    name={genres.name}
                    id={genres.id}
                    options={genres.options}
                    value={values.genres}
                    onChange={handleGenresChange}
                    onBlur={handleGenresBlur}
                    placeholder={genres.placeholder}
                />
                {errors.genres && touched.genres && (<InputError error={errors.genres}/>)}
            </FormControl>
            <FormControl>
                <Label id={overview.id}>{overview.label}</Label>
                <InputField
                    name={overview.name}
                    id={overview.id}
                    placeholder={overview.placeholder}
                    value={values.overview}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.overview && touched.overview && (<InputError error={errors.overview}/>)}
            </FormControl>
            <FormControl>
                <Label id={runtime.id}>{runtime.label}</Label>
                <InputField
                    name={runtime.name}
                    id={runtime.id}
                    placeholder={runtime.placeholder}
                    value={values.runtime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.runtime && touched.runtime && (<InputError error={errors.runtime}/>)}
            </FormControl>
            <div className="movie-form__action">
                <Button onClick={handleReset} secondary>Reset</Button>
                <Button onClick={handleSubmit} disabled={!dirty || isSubmitting} primary>{edit ? 'Save' : 'Submit'}</Button>
            </div>
        </form>
    )
};


MovieForm.propTypes = {
    edit: PropTypes.bool,
    values: PropTypes.object,
    touched: PropTypes.object,
    errors: PropTypes.object,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleReset: PropTypes.func,
    setFieldValue: PropTypes.func,
    setFieldTouched: PropTypes.func,
    dirty: PropTypes.bool,
    isSubmitting: PropTypes.bool,
};

export default MovieForm;
