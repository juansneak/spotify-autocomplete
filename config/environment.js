'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'spotify-autocomplete',
    environment,
    rootURL: '/',
    locationType: 'auto',
    // accessToken: 'BQDH4qAJu2gU8rRwvBCYZqOSPVHCZH8vFT8lg3r3wl-X4_TEp_-zIz6Ir1FoJuCfcsMXragu2LJQG7O9tYUrr2hQkbo9qpyr4CbjDLIrQr4FhYi8Wds',
    spotify: {
      apiUrl: 'https://api.spotify.com',
      apiNamespace: 'v1',
      accountUrl: 'https://accounts.spotify.com',
      accountNamespace: 'api',
      grantType: 'client_credentials',
      clientId: 'b2095a982e054559a72596aa8ca3852b',
      clientSecret: '5ce1f4b23e7c45fea3613c1aab00bca4',
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
