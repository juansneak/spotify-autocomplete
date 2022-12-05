import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class TrackRoute extends Route {
    @service store;

    @service ajax;

    beforeModel(transition) {
        if (isEmpty(this.ajax.accessToken)) {
            return this.transitionTo('access-error');
        }
    }

    async model(params) {
        return this.store.peekRecord('track', params.id) || this.store.findRecord('track', params.id);
    }
}
