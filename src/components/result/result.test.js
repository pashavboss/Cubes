import React from "react";
import Result from "./Result";
import {getByTestId, render} from "@testing-library/react";



it("If there is no download and the values 3, 1, 3 are passed", () => {
    const {container} = render(<Result load={false} data={[{value: 3}, {value: 1}, {value: 3}]}/>);
    const text = getByTestId(container, "value").textContent
    expect(text).toEqual("7");
});


it("If there is no download and the values 6, 1, 4 are passed", () => {
    const {container} = render(<Result load={false} data={[{value: 6}, {value: 1}, {value: 4}]}/>);
    const text = getByTestId(container, "value").textContent
    expect(text).toEqual("11");
});
