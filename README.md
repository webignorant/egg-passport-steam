# egg-passport-steam

steam passport plugin for egg

## Install

```bash
$ npm i egg-passport-steam --save
```

## Usage

```js
// config/plugin.js
exports.passportSteam = {
  enable: true,
  package: 'egg-passport-steam',
};
```

## Configuration

```js
// config/config.default.js
exports.passportSteam = {
  key: 'your oauth key',
  returnURL: 'your callback url',
  realm: 'your site url',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE.txt)
