import React from "react";
import {getByTestId, render} from "@testing-library/react";
import Buttons from "./Buttons";



it("Check button text when no data is available", () => {
    const {container} = render(<Buttons  data={null}/>);
    const text = getByTestId(container, "btn").textContent
    expect(text).toEqual("Roll");
});

it("Check button text when data is available", () => {
    const {container} = render(<Buttons load={false} data={[{value: 3}, {value: 1}, {value: 3}]}/>);
    const text = getByTestId(container, "btn").textContent
    expect(text).toEqual("Roll again");
});


