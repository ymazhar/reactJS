import React from "react";
import MovieList from "./movie-list";


describe("Movie list component", () => {
    it("should render Movie list component", () => {
        const component = shallow(<MovieList/>);
        expect(component).toMatchSnapshot();
    })
})