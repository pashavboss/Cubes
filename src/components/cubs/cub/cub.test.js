import React from "react";
import Cub from "./Cub";
import {render} from "@testing-library/react";

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('check the conformity of styles to the value 6', () => {
    const {container} = render(<Cub value={6}/>)
    expect(container.querySelector('.cub').style._values.transform).toBe( `rotateX(1085deg) rotateY(-10985deg) rotateZ(0deg)`)
});

it('check the conformity of styles to the value 5', () => {
    const {container} = render(<Cub value={5}/>)
    expect(container.querySelector('.cub').style._values.transform).toBe( `rotateX(-2155deg) rotateY(9805deg) rotateZ(0deg)`)
});

it('check the conformity of styles to the value 4', () => {
    const {container} = render(<Cub value={4}/>)
    expect(container.querySelector('.cub').style._values.transform).toBe( `rotateX(-1705deg) rotateY(-10080deg) rotateZ(5deg)`)
});

it('check the conformity of styles to the value 3', () => {
    const {container} = render(<Cub value={3}/>)
    expect(container.querySelector('.cub').style._values.transform).toBe( `rotateX(275deg) rotateY(8640deg) rotateZ(5deg)`)
});

it('check the conformity of styles to the value 2', () => {
    const {container} = render(<Cub value={2}/>)
    expect(container.querySelector('.cub').style._values.transform).toBe( `rotateX(1805deg) rotateY(-6215deg) rotateZ(0deg)`)
});

it('check the conformity of styles to the value 1', () => {
    const {container} = render(<Cub value={1}/>)
    expect(container.querySelector('.cub').style._values.transform).toBe( `rotateX(365deg) rotateY(-8645deg) rotateZ(0deg)`)
});

it('check the conformity of styles to the default value', () => {
    const {container} = render(<Cub value={0}/>)
    expect(container.querySelector('.cub').style._values.transform).toBe( `rotateX(-12032deg) rotateY(-12032deg) rotateZ(-12032deg)`)
});
