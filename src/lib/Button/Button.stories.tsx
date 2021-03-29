import { action } from "@storybook/addon-actions";
import { boolean, radios, text } from "@storybook/addon-knobs";
import React from "react";
import { Button } from ".";
import ImgUser from "../../../static/img_user.png";
import { FontType } from "../Label";

export default {
    title: "Core/Button",
};

export const Default = () => (
    <Button
        className="btn-link"
        onClick={action("on click")}
        fontFamily={radios("fontFamily", FontType, FontType.RobotoRegular)}
    >
        {text("label", "Button")}
    </Button>
);

export const ImageButton = () => (
    <Button
        disabled={boolean("disabled", false)}
        onClick={action("on click")}
        fontFamily={radios("fontFamily", FontType, FontType.RobotoRegular)}
    >
        <img style={{ width: 30 }} className="mr-3" src={ImgUser} />
        {text("label", "Button")}
    </Button>
);
