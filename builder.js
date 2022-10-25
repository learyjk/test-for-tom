require("esbuild")
    .build({
        entryPoints: ["working.js"],
        bundle: true,
        minify: true,
        watch: true,
        sourcemap: true,
        outfile: "dist/index.js",

    })
    .catch(() => ProcessingInstruction.exit(1));