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
                format: "esm",
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
            resolve(),
            commonjs(),
        ],
        external: [...Object.keys(pkg.peerDependencies || {})],
    },
];
