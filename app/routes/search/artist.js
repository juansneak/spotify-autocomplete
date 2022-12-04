import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ArtistRoute extends Route {
    @service store;

    @service ajax;

    async model(params) {
        await this.ajax.fetchArtistAlbums(params.id);
        return this.store.peekRecord('artist', params.id) || this.store.findRecord('artist', params.id);
    }
}

