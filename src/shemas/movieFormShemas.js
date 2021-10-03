import * as Yup from "yup";

const MovieFormShemas = () => (
    Yup.object().shape({
        id: Yup.number().required().positive().integer(),
        title: Yup.string().required(),
        release_date: Yup.string(),
        poster_path: Yup.string().required(),
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