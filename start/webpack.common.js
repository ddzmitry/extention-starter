const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
// used to clean dev builds if running prod
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    // create our chunks since we have to have options and
    // popup pages
    popup: path.resolve('src/popup/popup.tsx'),
    options: path.resolve('src/options/options.tsx'),
    background: path.resolve('src/background/background.ts'),
    contentScript: path.resolve('src/contentScript/contentScript.ts'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        // it also bundles css into JS
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        // allows directly import files directly into code
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      // only clear when we run prod
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/static'),
          to: path.resolve('dist'),
        },
      ],
    }),
    ...getHtmlPlugins(['popup', 'options']),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    // output as chunks
    filename: '[name].js',
    path: path.resolve('dist'),
  },
  // combines all javascript to share modules
  // it helps to optimize code as it shares
  // like React etc.
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        // inject js file into htmls files
        title: 'React Extension',
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  )
}
