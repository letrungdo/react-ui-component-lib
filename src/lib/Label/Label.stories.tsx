import { radios, text } from "@storybook/addon-knobs";
import React from "react";
import { FontType, Label } from ".";

export default {
    title: "Core/Label",
    parameters: {
        viewport: {
            defaultViewport: "myViewport",
        },
    },
};

export const NoText = () => {
    return (
        <Label className={text("className", "")} fontFamily={radios("fontFamily", FontType, FontType.RobotoRegular)} />
    );
};

export const HasText = () => {
    return (
        <Label
            className={text("className", "fs-15 lh-18")}
            fontFamily={radios("fontFamily", FontType, FontType.RobotoRegular)}
        >
            {text("text", "ラベルテキスト")}
        </Label>
    );
};
