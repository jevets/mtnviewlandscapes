# mtnviewlandscapes.com

Generates a static site for [mtnviewlandscapes.com](http://www.mtnviewlandscapes.com).

## Dependencies

1. Install [node](https://nodejs.org/) and [npm](http://npmjs.com/)
2. Install [`browserify`](http://browserify.org/) and [`watchify`](https://github.com/substack/watchify) globally with `npm install -g browserify watchify`
3. Install [Harp](http://harpjs.com/) globally with `npm install -g harp`

### Harp

[Harp](http://harpjs.com/) is used to serve and compile [Jade](http://jade-lang.com/) and [LESS](http://lesscss.org/) files. Harp can process several other file formats, but this project only uses Jade and LESS (at the time of this writing).

### Browserify

Browerify allows the use of `npm` packages in front end javascript files. 

For example: Instead of loading `<script src='path/to/jquery.js'/>` via HTML, we install `jquery` via `npm` (see `package.json`) and then load it into `app.js` via `browerify`'s `require()` function. Browserify will extract the necessary `jquery` file and bundle it into the final, built `bundle.js`. 

`watchify` does the same thing as `browserify`, but is used for local development, instructing `browserify` to rebuild `bundle.js` every time `app.js` changes.

## Local Development

1. Clone the repo to your workstation, then `cd` into the directory and run `npm install`

### `npm` scripts

There are several `npm` scripts available. See `package.json` for more info, but here are the main ones you'll use regularly:

#### `npm run serve`

Simply runs the harp webserver.

#### `npm run build-js`

Runs `browserify` on `app.js`, resulting in a `bundle.js` that includes third-party scripts loaded via `require()`.

#### `npm run watch-js`

Runs `watchify` on `app.js`, effectively re-running `browserify` whenever `app.js` is changed.

#### `npm run dev`

(this simply runs both `npm run watch-js` and `npm run serve` concurrently)

- Watches app.js
- Runs the Harp webserver

## Deployment

Run `npm run build` to compile the project to static files to the `/www` folder, which will be created if it doesn't exist. (This is Harp's default behavior.)

## To Do

- Determine application server
- Determine deployment method (plan is to use [netlify](https://www.netlify.com) via git push to the `master` branch on the BitBucket repo)

## Changelog

### 20150612 

- Initial project setup