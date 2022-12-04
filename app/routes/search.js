import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SearchRoute extends Route {
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
