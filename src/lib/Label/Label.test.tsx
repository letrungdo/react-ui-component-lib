import { mount } from "enzyme";
import React from "react";
import { Label } from ".";

describe("Label", () => {
    it("No text", () => {
        const elm = mount(<Label />);
        const label = elm.find("span");
        expect(label.text()).toEqual("-");
        expect(label.prop("className")).toContain("label");

        expect(label).toMatchSnapshot();
    });
});
