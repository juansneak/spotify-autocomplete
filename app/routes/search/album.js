import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class AlbumRoute extends Route {
    @service store;

    @service ajax;

    beforeModel(transition) {
        if (isEmpty(this.ajax.accessToken)) {
            return this.transitionTo('access-error');
        }
    }

    async model(params) {
        await this.ajax.fetchAlbumTracks(params.id);
        return this.store.peekRecord('album', params.id) || this.store.findRecord('album', params.id);
    }
}
