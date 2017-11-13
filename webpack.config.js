module.exports = {

  // start of react app
  entry: "./app/app.js",

  // JS - output tis file
  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /app/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  devtool: "eval-source-map"
};
