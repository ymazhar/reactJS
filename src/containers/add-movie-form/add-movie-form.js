import React from "react";
import SelectField from "../../components/select-field";
import InputField from "../../components/input-field";

import "./add-movie-form.scss";

const AddMovieForm = () => {
    const options = [
        {
            value: 'Release Date',
            id: "1",
            name: 'Release Date'

        },
        {
            value: 'Sort',
            id: "2",
            name: 'Sort 2'

        },
        {
            value: 'Sort3',
            id: "3",
            name: 'Sort 3'

        }
    ]

    return(
        <form className={"add-movie-form"}>
            <InputField label={"Title"} name={"title"} id={"videoTitle"} placeholder={"Add movie title"}/>
            <InputField label={"Release date"} name={"releaseDate"} id={"releaseDate"} placeholder={"Select Date"}/>
            <InputField label={"Movie Url"} name={"movieUrl"} id={"movieUrl"} placeholder={"Movie Url Here"}/>
            <SelectField label={"Genre"} name={"genre"} id={"genre"} options={options} className={"select-field-input"}/>
            <InputField label={"Overview"} name={"overview"} id={"overview"} placeholder={"Overview here"}/>
            <InputField label={"Runtime"} name={"runtime"} id={"runtime"} placeholder={"Runtime here"}/>
        </form>
    )
}

export default AddMovieForm;