import React from "react";
import { Button } from "../Button";
import { mount, shallow } from "enzyme";

describe("Button", () => {
    const TEXT = "this is text";
    const ev = jest.fn();

    beforeEach(() => {
        ev.mockReset();
    });

    test("Has text", () => {
        const elm = mount(<Button>{TEXT}</Button>);

        expect(elm).toMatchSnapshot();
    });

    test("On Click", () => {
        const elm = shallow(<Button onClick={ev}>Click me</Button>);

        elm.simulate("click");
        expect(ev.mock.calls.length).toBe(1);

        expect(elm).toMatchSnapshot();
    });

    test("Disabled", () => {
        const elm = shallow(<Button disabled={true}>Disabled</Button>);

        expect(elm.is("[disabled]")).toBe(true);

        expect(elm).toMatchSnapshot();
    });
});
