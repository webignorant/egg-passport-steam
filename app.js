'use strict';

const debug = require('debug')('egg-passport-steam');
const assert = require('assert');
const Strategy = require('passport-steam').Strategy;

module.exports = app => {
  const config = app.config.passportSteam;
  assert(config.key, '[egg-passport-steam] config.passportSteam.key required');
  config.apiKey = config.key;
  config.passReqToCallback = true;

  // must require `req` params
  app.passport.use('steam', new Strategy(config, (req, identifier, profile, done) => {
    // format user
    const user = {
      provider: 'steam',
      id: identifier,
      profile,
    };

    debug('%s %s get user: %j', req.method, req.url, user);

    // let passport do verify and call verify hook
    app.passport.doVerify(req, user, done);
  }));
};
