import { radios, text } from "@storybook/addon-knobs";
import React from "react";
import { FontType, Label } from "../src/lib/Label";

export default {
    title: "Core/Label",
    parameters: {
        viewport: {
            defaultViewport: "DoLT",
        },
    },
};

export const NoText = () => {
    return (
        <Label
            className={text("className", "")}
            fontFamily={radios("fontFamily", FontType, FontType.NotoSansJPRegular)}
        />
    );
};

export const HasText = () => {
    return (
        <Label
            text={text("text", "ラベルテキスト")}
            className={text("className", "fs-15 lh-18 mr-10 ml-10")}
            fontFamily={radios("fontFamily", FontType, FontType.NotoSansJPRegular)}
        />
    );
};
