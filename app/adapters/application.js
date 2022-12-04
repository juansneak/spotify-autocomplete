import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'spotify-autocomplete/config/environment';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
    @service('ajax') ajaxService;

    host = ENV.spotify.apiUrl;

    namespace = ENV.spotify.apiNamespace;

    accessToken = ENV.accessToken;

    headers = {
        Authorization: `Bearer ${this.ajaxService.accessToken}`
    };

    urlForFindRecord() {
        return `${super.urlForFindRecord(...arguments)}`;
    }
}
