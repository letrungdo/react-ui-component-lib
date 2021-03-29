module.exports = {
    stories: ["../src/lib/**/*.stories.@(ts|tsx)"],
    addons: [
        "@storybook/addon-actions",
        "@storybook/addon-links",
        "@storybook/addon-a11y",
        "@storybook/addon-knobs",
        "@storybook/addon-storysource",
        "@storybook/addon-backgrounds",
        "@storybook/addon-docs",
        "@storybook/addon-viewport",
    ],
};
