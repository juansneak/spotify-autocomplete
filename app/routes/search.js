import Route from '@ember/routing/route';
import { isPresent } from '@ember/utils';
import { inject as service } from '@ember/service';
import { LIMIT } from 'spotify-autocomplete/services/ajax';

export default class SearchRoute extends Route {
    @service store;

    @service ajax;

    artists;

    albums;

    tracks;

    get limit() {
        return LIMIT - 1;
    }

    setupController(controller, model) {
        super.setupController(...arguments);
        controller.artists = this.artists;
        controller.albums = this.albums;
        controller.tracks = this.tracks;
    }

    beforeModel(transition) {
        if (isPresent(transition.to.queryParams.query)) {
            return this.ajax.search(transition.to.queryParams.query).then(() => {
                this.artists = this.store.peekAll('artist').slice(0, this.limit);
                this.albums = this.store.peekAll('album').slice(0, this.limit);
                this.tracks = this.store.peekAll('track').slice(0, this.limit);
            });
        }
    }
}
