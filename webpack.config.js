const path = require("path");

module.exports = {
  entry: {
    NestedSelect: "./src/index.ts",
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
    library: "nested-select",
    libraryTarget: "umd",
    // umdNamedDefine: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 512000,
              name: "svg/[hash]-[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  externals: {
    react: "react"
  }
}