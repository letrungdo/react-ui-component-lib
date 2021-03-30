import { mount } from "enzyme";
import React from "react";
import { Label } from ".";

describe("Label", () => {
    it("No text", () => {
        const elm = mount(<Label />);

        expect(elm).toMatchSnapshot();
    });

    it("Has text", () => {
        const elm = mount(<Label>Hello</Label>);

        expect(elm).toMatchSnapshot();
    });
});
