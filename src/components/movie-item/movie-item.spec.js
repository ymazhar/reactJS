import React from "react";
import MovieItem from "./movie-item";

it("should render Movie Item component", () => {
    const component = shallow(<MovieItem/>);
    const wrapper = component.find(".movie-item");
    expect(wrapper.length).toBe(1);
})