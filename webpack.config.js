const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
    "entry": "index.js",
    plugins: [
        new GoogleFontsPlugin({
            fonts: [
                {family: "Montserrat", variants: ["400", "500", "600", "700"]}
            ]
        })
    ]
}
