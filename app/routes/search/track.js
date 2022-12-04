import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TrackRoute extends Route {
    @service store

    async model(params) {
        return this.store.peekRecord('track', params.id) || this.store.findRecord('track', params.id);
    }
}
