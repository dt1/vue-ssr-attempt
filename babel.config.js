module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        ["@babel/preset-env", {
            "modules": "commonjs",
            "targets": {
                "browsers": ["> 1%", "last 2 versions", "not ie <= 8"],
                "node": "current"
            }
        }]
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
}
