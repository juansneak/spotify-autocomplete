import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AlbumRoute extends Route {
    @service store;

    @service ajax;

    async model(params) {
        await this.ajax.fetchAlbumTracks(params.id);
        return this.store.peekRecord('album', params.id) || this.store.findRecord('album', params.id);
    }
}
