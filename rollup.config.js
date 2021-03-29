import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default [
    {
        input: ["src/index.ts"],
        output: [
            {
                dir: "dist",
                format: "cjs",
                exports: "auto",
            },
        ],
        preserveModules: true,
        plugins: [
            typescript({ tsconfig: "tsconfig-lib.json" }),
            sass({
                insert: true,
            }),
            image(),
            babel({
                babelHelpers: "bundled",
                presets: ["@babel/preset-env", "@babel/preset-react"],
                extensions: [".js"],
                exclude: ["node_modules/**"],
            }),
            resolve(),
            commonjs(),
        ],
        external: [
            ...Object.keys(pkg.peerDependencies || {}),
        ],
    },
];
