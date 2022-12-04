'use strict';



;define("spotify-autocomplete/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("spotify-autocomplete/adapters/application", ["exports", "@ember-data/adapter/json-api", "spotify-autocomplete/config/environment", "@ember/service"], function (_exports, _jsonApi, _environment, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ApplicationAdapter = (_dec = (0, _service.inject)('ajax'), (_class = class ApplicationAdapter extends _jsonApi.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "ajaxService", _descriptor, this);
      _defineProperty(this, "host", _environment.default.spotify.apiUrl);
      _defineProperty(this, "namespace", _environment.default.spotify.apiNamespace);
      _defineProperty(this, "accessToken", _environment.default.accessToken);
      _defineProperty(this, "headers", {
        Authorization: `Bearer ${this.ajaxService.accessToken}`
      });
    }
    urlForFindRecord() {
      return `${super.urlForFindRecord(...arguments)}`;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "ajaxService", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ApplicationAdapter;
});
;define("spotify-autocomplete/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "spotify-autocomplete/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class App extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("spotify-autocomplete/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("spotify-autocomplete/components/card/index", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component"], function (_exports, _component, _templateFactory, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <article class="ui card">
    <div class="image">
      <img src={{@imageUrl}}>
    </div>
    <div class="content">
      <LinkTo @route={{@route}} @model={{@id}}>
        <span class="header">{{@name}}</span>
      </LinkTo>
    </div>
  </article>
  
  */
  {
    "id": "ynHrcjh7",
    "block": "[[[10,\"article\"],[14,0,\"ui card\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"image\"],[12],[1,\"\\n    \"],[10,\"img\"],[15,\"src\",[30,1]],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"content\"],[12],[1,\"\\n    \"],[8,[39,0],null,[[\"@route\",\"@model\"],[[30,2],[30,3]]],[[\"default\"],[[[[1,\"\\n      \"],[10,1],[14,0,\"header\"],[12],[1,[30,4]],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@imageUrl\",\"@route\",\"@id\",\"@name\"],false,[\"link-to\"]]",
    "moduleName": "spotify-autocomplete/components/card/index.hbs",
    "isStrictMode": false
  });
  class CardComponent extends _component2.default {}
  _exports.default = CardComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, CardComponent);
});
;define("spotify-autocomplete/components/layout/nav-bar", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <nav class="menu">
    <LinkTo @route="home" class="menu-index">
      Home
    </LinkTo>
    <LinkTo @route="credits" class="menu-index">
      Credits
    </LinkTo>
    <LinkTo @route="search" class="menu-index">
      Search
    </LinkTo>
  </nav>
  
  */
  {
    "id": "Qhh/l6Bq",
    "block": "[[[10,\"nav\"],[14,0,\"menu\"],[12],[1,\"\\n  \"],[8,[39,0],[[24,0,\"menu-index\"]],[[\"@route\"],[\"home\"]],[[\"default\"],[[[[1,\"\\n    Home\\n  \"]],[]]]]],[1,\"\\n  \"],[8,[39,0],[[24,0,\"menu-index\"]],[[\"@route\"],[\"credits\"]],[[\"default\"],[[[[1,\"\\n    Credits\\n  \"]],[]]]]],[1,\"\\n  \"],[8,[39,0],[[24,0,\"menu-index\"]],[[\"@route\"],[\"search\"]],[[\"default\"],[[[[1,\"\\n    Search\\n  \"]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"link-to\"]]",
    "moduleName": "spotify-autocomplete/components/layout/nav-bar.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("spotify-autocomplete/components/result-list/index", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component"], function (_exports, _component, _templateFactory, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <h3>Artists</h3>
  <section class="ui grid">
    {{#each @artists as |artist|}}
      <div class="four wide column">
        <Card
          @name={{artist.name}}
          @id={{artist.id}}
          @imageUrl={{artist.imgMd}}
          @route="search.artist"
        />
      </div>
    {{/each}}
  </section>
  
  <h3>Albums</h3>
  <section class="ui grid">
    {{#each @albums as |album|}}
      <div class="four wide column">
        <Card
          @name={{album.name}}
          @id={{album.id}}
          @imageUrl={{album.imgMd}}
          @route="search.album"
        />
      </div>
    {{/each}}
  </section>
  
  <h3>Tracks</h3>
  <section class="ui grid">
    {{#each @tracks as |track|}}
      <div class="four wide column">
        <Card
          @name={{track.name}}
          @id={{track.id}}
          @imageUrl={{track.album.imgMd}}
          @route="search.track"
        />
      </div>
    {{/each}}
  </section>
  
  */
  {
    "id": "+D9aK3k4",
    "block": "[[[10,\"h3\"],[12],[1,\"Artists\"],[13],[1,\"\\n\"],[10,\"section\"],[14,0,\"ui grid\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[1,\"    \"],[10,0],[14,0,\"four wide column\"],[12],[1,\"\\n      \"],[8,[39,2],null,[[\"@name\",\"@id\",\"@imageUrl\",\"@route\"],[[30,2,[\"name\"]],[30,2,[\"id\"]],[30,2,[\"imgMd\"]],\"search.artist\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\"]],[2]],null],[13],[1,\"\\n\\n\"],[10,\"h3\"],[12],[1,\"Albums\"],[13],[1,\"\\n\"],[10,\"section\"],[14,0,\"ui grid\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,3]],null]],null],null,[[[1,\"    \"],[10,0],[14,0,\"four wide column\"],[12],[1,\"\\n      \"],[8,[39,2],null,[[\"@name\",\"@id\",\"@imageUrl\",\"@route\"],[[30,4,[\"name\"]],[30,4,[\"id\"]],[30,4,[\"imgMd\"]],\"search.album\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\"]],[4]],null],[13],[1,\"\\n\\n\"],[10,\"h3\"],[12],[1,\"Tracks\"],[13],[1,\"\\n\"],[10,\"section\"],[14,0,\"ui grid\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,5]],null]],null],null,[[[1,\"    \"],[10,0],[14,0,\"four wide column\"],[12],[1,\"\\n      \"],[8,[39,2],null,[[\"@name\",\"@id\",\"@imageUrl\",\"@route\"],[[30,6,[\"name\"]],[30,6,[\"id\"]],[30,6,[\"album\",\"imgMd\"]],\"search.track\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\"]],[6]],null],[13],[1,\"\\n\"]],[\"@artists\",\"artist\",\"@albums\",\"album\",\"@tracks\",\"track\"],false,[\"each\",\"-track-array\",\"card\"]]",
    "moduleName": "spotify-autocomplete/components/result-list/index.hbs",
    "isStrictMode": false
  });
  class ResultListComponent extends _component2.default {}
  _exports.default = ResultListComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ResultListComponent);
});
;define("spotify-autocomplete/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("spotify-autocomplete/controllers/search", ["exports", "@ember/controller", "@ember/object", "@glimmer/tracking", "ember-concurrency", "ember-concurrency-decorators", "@ember/service"], function (_exports, _controller, _object, _tracking, _emberConcurrency, _emberConcurrencyDecorators, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const DEBOUNCE_TIME = 1000;
  const UNLOAD_TIME = 1000;
  let SearchController = (_class = class SearchController extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "ajax", _descriptor, this);
      _defineProperty(this, "query", void 0);
      _initializerDefineProperty(this, "artists", _descriptor2, this);
      _initializerDefineProperty(this, "albums", _descriptor3, this);
      _initializerDefineProperty(this, "tracks", _descriptor4, this);
    }
    get loading() {
      return this.updateQuery.isRunning || this.searchRecords.isRunning;
    }
    *updateQuery(event) {
      yield (0, _emberConcurrency.timeout)(DEBOUNCE_TIME);
      (0, _object.set)(this, 'query', event.target.value);
    }
    *searchRecords() {
      this.store.unloadAll();
      yield (0, _emberConcurrency.timeout)(UNLOAD_TIME);
      if (this.query) {
        try {
          yield this.ajax.search(this.query);
          this.artists = this.store.peekAll('artist');
          this.albums = this.store.peekAll('album');
          this.tracks = this.store.peekAll('track');
        } catch (error) {
          console.log("THERE WAS AN ERROR HERE!!!");
          // TODO: handle 429 error ??
          console.log(error);
        }
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "ajax", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "artists", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "albums", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "tracks", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "updateQuery", [_emberConcurrencyDecorators.task], Object.getOwnPropertyDescriptor(_class.prototype, "updateQuery"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "searchRecords", [_emberConcurrencyDecorators.restartableTask], Object.getOwnPropertyDescriptor(_class.prototype, "searchRecords"), _class.prototype)), _class);
  _exports.default = SearchController;
});
;define("spotify-autocomplete/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("spotify-autocomplete/formats", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    time: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    date: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    number: {
      compact: {
        notation: 'compact'
      },
      EUR: {
        style: 'currency',
        currency: 'EUR'
      },
      USD: {
        style: 'currency',
        currency: 'USD'
      }
    }
  };
  _exports.default = _default;
});
;define("spotify-autocomplete/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
});
;define("spotify-autocomplete/helpers/app-version", ["exports", "@ember/component/helper", "spotify-autocomplete/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("spotify-autocomplete/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("spotify-autocomplete/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
;define("spotify-autocomplete/helpers/eq", ["exports", "ember-truth-helpers/helpers/eq"], function (_exports, _eq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _eq.equal;
    }
  });
});
;define("spotify-autocomplete/helpers/format-date", ["exports", "ember-intl/helpers/format-date"], function (_exports, _formatDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatDate.default;
    }
  });
});
;define("spotify-autocomplete/helpers/format-message", ["exports", "ember-intl/helpers/format-message"], function (_exports, _formatMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatMessage.default;
    }
  });
});
;define("spotify-autocomplete/helpers/format-number", ["exports", "ember-intl/helpers/format-number"], function (_exports, _formatNumber) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatNumber.default;
    }
  });
});
;define("spotify-autocomplete/helpers/format-relative", ["exports", "ember-intl/helpers/format-relative"], function (_exports, _formatRelative) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatRelative.default;
    }
  });
});
;define("spotify-autocomplete/helpers/format-time", ["exports", "ember-intl/helpers/format-time"], function (_exports, _formatTime) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatTime.default;
    }
  });
});
;define("spotify-autocomplete/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("spotify-autocomplete/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("spotify-autocomplete/helpers/is-after", ["exports", "ember-moment/helpers/is-after"], function (_exports, _isAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
;define("spotify-autocomplete/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("spotify-autocomplete/helpers/is-before", ["exports", "ember-moment/helpers/is-before"], function (_exports, _isBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
;define("spotify-autocomplete/helpers/is-between", ["exports", "ember-moment/helpers/is-between"], function (_exports, _isBetween) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
;define("spotify-autocomplete/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("spotify-autocomplete/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("spotify-autocomplete/helpers/is-same-or-after", ["exports", "ember-moment/helpers/is-same-or-after"], function (_exports, _isSameOrAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
;define("spotify-autocomplete/helpers/is-same-or-before", ["exports", "ember-moment/helpers/is-same-or-before"], function (_exports, _isSameOrBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
;define("spotify-autocomplete/helpers/is-same", ["exports", "ember-moment/helpers/is-same"], function (_exports, _isSame) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
;define("spotify-autocomplete/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("spotify-autocomplete/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("spotify-autocomplete/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("spotify-autocomplete/helpers/moment-add", ["exports", "ember-moment/helpers/moment-add"], function (_exports, _momentAdd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
;define("spotify-autocomplete/helpers/moment-calendar", ["exports", "ember-moment/helpers/moment-calendar"], function (_exports, _momentCalendar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
;define("spotify-autocomplete/helpers/moment-diff", ["exports", "ember-moment/helpers/moment-diff"], function (_exports, _momentDiff) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
;define("spotify-autocomplete/helpers/moment-duration", ["exports", "ember-moment/helpers/moment-duration"], function (_exports, _momentDuration) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
;define("spotify-autocomplete/helpers/moment-format", ["exports", "ember-moment/helpers/moment-format"], function (_exports, _momentFormat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
;define("spotify-autocomplete/helpers/moment-from-now", ["exports", "ember-moment/helpers/moment-from-now"], function (_exports, _momentFromNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
;define("spotify-autocomplete/helpers/moment-from", ["exports", "ember-moment/helpers/moment-from"], function (_exports, _momentFrom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
;define("spotify-autocomplete/helpers/moment-subtract", ["exports", "ember-moment/helpers/moment-subtract"], function (_exports, _momentSubtract) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
;define("spotify-autocomplete/helpers/moment-to-date", ["exports", "ember-moment/helpers/moment-to-date"], function (_exports, _momentToDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
;define("spotify-autocomplete/helpers/moment-to-now", ["exports", "ember-moment/helpers/moment-to-now"], function (_exports, _momentToNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
;define("spotify-autocomplete/helpers/moment-to", ["exports", "ember-moment/helpers/moment-to"], function (_exports, _momentTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
;define("spotify-autocomplete/helpers/moment-unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define("spotify-autocomplete/helpers/moment", ["exports", "ember-moment/helpers/moment"], function (_exports, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
;define("spotify-autocomplete/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-eq"], function (_exports, _notEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEq.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEq.notEqualHelper;
    }
  });
});
;define("spotify-autocomplete/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("spotify-autocomplete/helpers/now", ["exports", "ember-moment/helpers/now"], function (_exports, _now) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
;define("spotify-autocomplete/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("spotify-autocomplete/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("spotify-autocomplete/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("spotify-autocomplete/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("spotify-autocomplete/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("spotify-autocomplete/helpers/t", ["exports", "ember-intl/helpers/t"], function (_exports, _t) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _t.default;
    }
  });
});
;define("spotify-autocomplete/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("spotify-autocomplete/helpers/unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define("spotify-autocomplete/helpers/utc", ["exports", "ember-moment/helpers/utc"], function (_exports, _utc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(_exports, "utc", {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
;define("spotify-autocomplete/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("spotify-autocomplete/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "spotify-autocomplete/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("spotify-autocomplete/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("spotify-autocomplete/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("spotify-autocomplete/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("spotify-autocomplete/initializers/export-application-global", ["exports", "ember", "spotify-autocomplete/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }
      var value = _environment.default.exportApplicationGlobal;
      var globalName;
      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }
      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }
  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("spotify-autocomplete/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',
    initialize() {}
  };
  _exports.default = _default;
});
;define("spotify-autocomplete/models/album", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let AlbumModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('string'), _dec5 = (0, _model.attr)('date'), _dec6 = (0, _model.belongsTo)('artist'), _dec7 = (0, _model.hasMany)('track'), (_class = class AlbumModel extends _model.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "name", _descriptor, this);
      _initializerDefineProperty(this, "imgXs", _descriptor2, this);
      _initializerDefineProperty(this, "imgMd", _descriptor3, this);
      _initializerDefineProperty(this, "imgLg", _descriptor4, this);
      _initializerDefineProperty(this, "releaseDate", _descriptor5, this);
      _initializerDefineProperty(this, "artist", _descriptor6, this);
      _initializerDefineProperty(this, "tracks", _descriptor7, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "imgXs", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "imgMd", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "imgLg", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "releaseDate", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "artist", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "tracks", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = AlbumModel;
});
;define("spotify-autocomplete/models/artist", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ArtistModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('string'), _dec5 = (0, _model.hasMany)('album'), (_class = class ArtistModel extends _model.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "name", _descriptor, this);
      _initializerDefineProperty(this, "imgXs", _descriptor2, this);
      _initializerDefineProperty(this, "imgMd", _descriptor3, this);
      _initializerDefineProperty(this, "imgLg", _descriptor4, this);
      _initializerDefineProperty(this, "albums", _descriptor5, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "imgXs", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "imgMd", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "imgLg", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "albums", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ArtistModel;
});
;define("spotify-autocomplete/models/track", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let TrackModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('number'), _dec3 = (0, _model.belongsTo)('album'), (_class = class TrackModel extends _model.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "name", _descriptor, this);
      _initializerDefineProperty(this, "durationMs", _descriptor2, this);
      _initializerDefineProperty(this, "album", _descriptor3, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "durationMs", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "album", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = TrackModel;
});
;define("spotify-autocomplete/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("spotify-autocomplete/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("spotify-autocomplete/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("spotify-autocomplete/router", ["exports", "@ember/routing/router", "spotify-autocomplete/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class Router extends _router.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('home', {
      path: '/'
    });
    this.route('credits', {
      path: '/credits'
    });
    this.route('token', {
      path: '/token'
    });
    this.route('search', {
      path: '/search'
    }, function () {
      this.route('artist', {
        path: '/artist/:id'
      });
      this.route('album', {
        path: '/album/:id'
      });
      this.route('track', {
        path: '/track/:id'
      });
    });
  });
});
;define("spotify-autocomplete/routes/search", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class SearchRoute extends _route.default {
    /* @service store
     setupController(controller, model) {
        super.setupController(controller, model);
    }
     async model() { // TODO: if I do something like this.store.query('search') it throws an error because model search does not exist
        return this.store.query('album',{
            type: 'album,artist,track',
            q: 'metallica'
        });
    } */
  }
  _exports.default = SearchRoute;
});
;define("spotify-autocomplete/routes/search/album", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let AlbumRoute = (_class = class AlbumRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "ajax", _descriptor2, this);
    }
    async model(params) {
      await this.ajax.fetchAlbumTracks(params.id);
      return this.store.peekRecord('album', params.id) || this.store.findRecord('album', params.id);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "ajax", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = AlbumRoute;
});
;define("spotify-autocomplete/routes/search/artist", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ArtistRoute = (_class = class ArtistRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _initializerDefineProperty(this, "ajax", _descriptor2, this);
    }
    async model(params) {
      await this.ajax.fetchArtistAlbums(params.id);
      return this.store.peekRecord('artist', params.id) || this.store.findRecord('artist', params.id);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "ajax", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ArtistRoute;
});
;define("spotify-autocomplete/routes/search/track", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let TrackRoute = (_class = class TrackRoute extends _route.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "store", _descriptor, this);
    }
    async model(params) {
      return this.store.peekRecord('track', params.id) || this.store.findRecord('track', params.id);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = TrackRoute;
});
;define("spotify-autocomplete/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("spotify-autocomplete/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("spotify-autocomplete/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("spotify-autocomplete/serializers/application", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class ApplicationSerializer extends _jsonApi.default {
    normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
      if (primaryModelClass.name === 'ArtistModel') {
        return {
          data: this.serializeArtist(payload)
        };
      }
      if (primaryModelClass.name === 'AlbumModel') {
        return {
          data: this.serializeAlbum(payload)
        };
      }
      if (primaryModelClass.name === 'TrackModel') {
        return {
          data: this.serializeTrack(payload)
        };
      }
    }
    normalize(typeHash, hash) {
      if (hash.type === 'track') {
        hash = this.serializeTrack(hash);
      }
      if (hash.type === 'album') {
        hash = this.serializeAlbum(hash);
      }
      if (hash.type === 'artist') {
        hash = this.serializeArtist(hash);
      }
      return super.normalize(typeHash, hash);
    }
    serializeAlbum(record) {
      return {
        type: record.type,
        id: record.id,
        attributes: {
          name: record.name,
          imgLg: record.images[0].url,
          imgMd: record.images[1].url,
          imgXs: record.images[2].url,
          releaseDate: new Date(record.release_date).toDateString()
        },
        relationships: {
          artist: {
            data: {
              type: "artist",
              id: record.artists[0].id
            }
          }
        }
      };
    }
    serializeArtist(record) {
      return {
        type: record.type,
        id: record.id,
        attributes: {
          name: record.name,
          imgLg: record.images[0].url,
          imgMd: record.images[1].url,
          imgXs: record.images[2].url
        }
      };
    }
    serializeTrack(record) {
      return {
        type: record.type,
        id: record.id,
        attributes: {
          name: record.name,
          durationMs: record.duration_ms
        },
        relationships: {
          album: {
            data: {
              type: 'album',
              id: record.album.id
              /*imgLg: record.album.images[0].url,
              imgMd: record.album.images[1].url,
              imgXs: record.album.images[2].url,*/
            }
          }
        }
      };
    }

    keyForAttribute(key) {
      return key;
    }
  }
  _exports.default = ApplicationSerializer;
});
;define("spotify-autocomplete/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
});
;define("spotify-autocomplete/services/ajax", ["exports", "@ember/service", "spotify-autocomplete/config/environment"], function (_exports, _service, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const SEARCH_TYPE = 'album,artist,track';
  const LIMIT = 10;
  let AjaxService = (_class = class AjaxService extends _service.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "store", _descriptor, this);
      _defineProperty(this, "accessToken", null);
      _defineProperty(this, "host", _environment.default.spotify.apiUrl);
      _defineProperty(this, "account", _environment.default.spotify.accountUrl);
      _defineProperty(this, "accountNamespace", _environment.default.spotify.accountNamespace);
      _defineProperty(this, "namespace", _environment.default.spotify.apiNamespace);
      _defineProperty(this, "grantType", _environment.default.spotify.grantType);
      _defineProperty(this, "clientId", _environment.default.spotify.clientId);
      _defineProperty(this, "clientSecret", _environment.default.spotify.clientSecret);
    }
    get headers() {
      return {
        Authorization: `Bearer ${this.accessToken}`
      };
    }
    get queryString() {
      return `grant_type=${this.grantType}&client_id=${this.clientId}&client_secret=${this.clientSecret}`;
    }
    async setAccessToken() {
      const response = await fetch(`${this.account}/${this.accountNamespace}/token?${this.queryString}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST'
      });
      const jsonResponse = await response.json();
      this.accessToken = jsonResponse.access_token;
    }
    async fetchAlbumTracks(id) {
      if (!this.accessToken) {
        await this.setAccessToken();
      }
      const response = await fetch(`${this.host}/${this.namespace}/albums/${id}/tracks`, {
        headers: this.headers
      });
      const jsonResponse = await response.json();
      const tracks = jsonResponse.items.map(track => {
        return {
          ...track,
          album: {
            id
          }
        };
      });
      this.store.pushPayload({
        data: tracks
      });
    }
    async fetchArtistAlbums(id) {
      if (!this.accessToken) {
        await this.setAccessToken();
      }
      const response = await fetch(`${this.host}/${this.namespace}/artists/${id}/albums`, {
        headers: this.headers
      });
      const jsonResponse = await response.json();
      const albums = jsonResponse.items;
      this.store.pushPayload({
        data: albums
      });
    }
    async search(query) {
      if (!this.accessToken) {
        await this.setAccessToken();
      }
      const response = await fetch(`${this.host}/${this.namespace}/search?type=${SEARCH_TYPE}&limit=${LIMIT}&q=${query}`, {
        headers: this.headers
      });
      const jsonResponse = await response.json();
      this.store.pushPayload({
        data: [...jsonResponse.albums.items, ...jsonResponse.artists.items, ...jsonResponse.tracks.items]
      });
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = AjaxService;
});
;define("spotify-autocomplete/services/intl", ["exports", "ember-intl/services/intl"], function (_exports, _intl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intl.default;
    }
  });
});
;define("spotify-autocomplete/services/moment", ["exports", "ember", "ember-moment/services/moment", "spotify-autocomplete/config/environment"], function (_exports, _ember, _moment, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    get
  } = _ember.default;
  var _default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
  _exports.default = _default;
});
;define("spotify-autocomplete/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("spotify-autocomplete/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("spotify-autocomplete/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("spotify-autocomplete/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "w68iP4ie",
    "block": "[[[1,[28,[35,0],[\"SpotifyAutocomplete\"],null]],[1,\"\\n\"],[10,\"main\"],[14,0,\"main\"],[12],[1,\"\\n  \"],[3,\" <Layout::NavBar/> \"],[1,\"\\n  \"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "spotify-autocomplete/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("spotify-autocomplete/templates/credits", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "Fho6DceW",
    "block": "[[[10,\"h1\"],[12],[1,\"Credits\"],[13],[1,\"\\n\"],[10,\"h3\"],[12],[1,\"Juan Carlos Morantes Taccetti\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "spotify-autocomplete/templates/credits.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("spotify-autocomplete/templates/search", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "GyQQjek/",
    "block": "[[[11,\"section\"],[24,0,\"container\"],[4,[38,0],[[28,[37,1],[[30,0,[\"searchRecords\"]]],null],[30,0,[\"query\"]]],null],[12],[1,\"\\n  \"],[10,\"h1\"],[12],[1,[28,[35,2],[\"search.title\"],null]],[13],[1,\"\\n\\n  \"],[10,0],[15,0,[29,[\"ui icon input container_input \",[52,[30,0,[\"loading\"]],\"loading\"]]]],[12],[1,\"\\n    \"],[8,[39,4],[[24,\"placeholder\",\"Search...\"],[4,[38,5],[\"keyup\",[28,[37,1],[[30,0,[\"updateQuery\"]]],null]],null]],null,null],[1,\"\\n    \"],[10,\"i\"],[14,0,\"search icon\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"loading\"]],[[[1,\"    \"],[10,0],[12],[1,\"Loading...\"],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[8,[39,6],null,[[\"@artists\",\"@albums\",\"@tracks\"],[[30,0,[\"artists\"]],[30,0,[\"albums\"]],[30,0,[\"tracks\"]]]],null],[1,\"\\n\"]],[]]],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[46,[28,[37,8],null,null],null,null,null],[1,\"\\n\\n\\n\"]],[],false,[\"did-update\",\"perform\",\"t\",\"if\",\"input\",\"on\",\"result-list\",\"component\",\"-outlet\"]]",
    "moduleName": "spotify-autocomplete/templates/search.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("spotify-autocomplete/templates/search/album", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "J7RA7vH2",
    "block": "[[[10,\"aside\"],[14,0,\"sidebar\"],[12],[1,\"\\n\\n  \"],[10,\"h1\"],[12],[1,[28,[35,0],[\"album\"],null]],[13],[1,\"\\n\\n  \"],[10,\"article\"],[14,0,\"ui card\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"image\"],[12],[1,\"\\n      \"],[10,\"img\"],[15,\"src\",[30,0,[\"model\",\"imgMd\"]]],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"content\"],[12],[1,\"\\n      \"],[10,1],[14,0,\"header\"],[12],[1,[30,0,[\"model\",\"name\"]]],[13],[1,\"\\n      \"],[10,0],[14,0,\"meta\"],[12],[1,\"\\n        \"],[10,1],[14,0,\"date\"],[12],[1,[30,0,[\"model\",\"releaseDate\"]]],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"h3\"],[12],[1,[28,[35,0],[\"tracks\"],null]],[13],[1,\"\\n\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"model\",\"tracks\"]]],null]],null],null,[[[1,\"    \"],[10,2],[12],[1,\"\\n      \"],[8,[39,3],null,[[\"@route\",\"@model\"],[\"search.track\",[30,1,[\"id\"]]]],[[\"default\"],[[[[1,[30,1,[\"name\"]]],[1,\" \"],[1,[30,1,[\"durationMs\"]]]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n\"]],[1]],null],[1,\"\\n\"],[13],[1,\"\\n\\n\\n\\n\\n\"]],[\"track\"],false,[\"t\",\"each\",\"-track-array\",\"link-to\"]]",
    "moduleName": "spotify-autocomplete/templates/search/album.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("spotify-autocomplete/templates/search/artist", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "7cg/S3IM",
    "block": "[[[10,\"aside\"],[14,0,\"sidebar\"],[12],[1,\"\\n\\n  \"],[10,\"h1\"],[12],[1,[28,[35,0],[\"artist\"],null]],[13],[1,\"\\n\\n  \"],[10,\"article\"],[14,0,\"ui card\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"image\"],[12],[1,\"\\n      \"],[10,\"img\"],[15,\"src\",[30,0,[\"model\",\"imgMd\"]]],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"content\"],[12],[1,\"\\n      \"],[10,1],[14,0,\"header\"],[12],[1,[30,0,[\"model\",\"name\"]]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"h3\"],[12],[1,[28,[35,0],[\"albums\"],null]],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"ui items\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"model\",\"albums\"]]],null]],null],null,[[[1,\"      \"],[10,0],[14,0,\"item\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"ui tiny image\"],[12],[1,\"\\n          \"],[10,\"img\"],[15,\"src\",[30,1,[\"imgXs\"]]],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"middle aligned content\"],[12],[1,\"\\n          \"],[8,[39,3],null,[[\"@route\",\"@model\"],[\"search.album\",[30,1,[\"id\"]]]],[[\"default\"],[[[[1,[30,1,[\"name\"]]]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"]],[\"album\"],false,[\"t\",\"each\",\"-track-array\",\"link-to\"]]",
    "moduleName": "spotify-autocomplete/templates/search/artist.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("spotify-autocomplete/templates/search/track", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "/QfT1SKf",
    "block": "[[[10,\"aside\"],[14,0,\"sidebar\"],[12],[1,\"\\n\\n  \"],[10,\"h1\"],[12],[1,[28,[35,0],[\"track\"],null]],[13],[1,\"\\n\\n  \"],[10,\"article\"],[14,0,\"ui card\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"image\"],[12],[1,\"\\n      \"],[10,\"img\"],[15,\"src\",[30,0,[\"model\",\"album\",\"imgMd\"]]],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"content\"],[12],[1,\"\\n      \"],[10,1],[14,0,\"header\"],[12],[1,[30,0,[\"model\",\"album\",\"name\"]]],[13],[1,\"\\n      \"],[10,0],[14,0,\"meta\"],[12],[1,\"\\n        \"],[10,1],[14,0,\"date\"],[12],[1,[30,0,[\"model\",\"album\",\"releaseDate\"]]],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"description\"],[12],[1,\"\\n        \"],[10,2],[12],[1,[30,0,[\"model\",\"name\"]]],[13],[1,\"\\n        \"],[10,2],[12],[1,[30,0,[\"model\",\"durationMs\"]]],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"]],[],false,[\"t\"]]",
    "moduleName": "spotify-autocomplete/templates/search/track.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("spotify-autocomplete/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("spotify-autocomplete/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("spotify-autocomplete/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("spotify-autocomplete/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;define("spotify-autocomplete/utils/intl/missing-message", ["exports", "ember-intl/-private/utils/missing-message"], function (_exports, _missingMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});
;

;define('spotify-autocomplete/config/environment', [], function() {
  var prefix = 'spotify-autocomplete';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("spotify-autocomplete/app")["default"].create({"name":"spotify-autocomplete","version":"0.0.0+3c2d9a16"});
          }
        
//# sourceMappingURL=spotify-autocomplete.map
