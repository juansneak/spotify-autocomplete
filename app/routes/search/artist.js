import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class ArtistRoute extends Route {
    @service store;

    @service ajax;

    setupController(controller, model) {
        super.setupController(...arguments);
        controller.showModal = true;
    }

    beforeModel(transition) {
        if (isEmpty(this.ajax.accessToken)) {
            return this.transitionTo('access-error');
        }
    }

    async model(params) {
        await this.ajax.fetchArtistAlbums(params.id);
        return this.store.peekRecord('artist', params.id) || this.store.findRecord('artist', params.id);
    }
}

