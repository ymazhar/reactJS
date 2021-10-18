import * as Yup from "yup";

const MovieFormShemas = () => (
    Yup.object().shape({
        id: Yup.number().required().positive().integer(),
        title: Yup.string().required(),
        release_date: Yup.string().required(),
        poster_path: Yup.string().matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
        )
            .required('Please enter website'),
        genres: Yup.array()
            .min(1, 'Pick at least 1 genre')
            .of(
                Yup.object().shape({
                    label: Yup.string().required(),
                    value: Yup.string().required(),
                })
            ),
        overview: Yup.string().required(),
        runtime: Yup.number().required().positive().integer(),
    })
)

export {
    MovieFormShemas
};