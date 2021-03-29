import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../src/assets/style/index.scss";
import "./style.scss";

const customViewports = {
    myViewport: {
        name: "MyViewport",
        styles: {
            width: "500px",
            height: "100%",
            padding: "0px",
        },
    },
};

// Config apply to all stories
addParameters({
    backgrounds: {
        default: "Light",
        values: [
            { name: "Light", value: "white" },
            { name: "Dark", value: "black" },
        ],
    },
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
    viewport: {
        viewports: {
            ...customViewports,
            ...INITIAL_VIEWPORTS,
        },
        defaultViewport: "iphone6p",
    },
});
