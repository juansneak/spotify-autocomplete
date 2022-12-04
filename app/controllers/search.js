import Controller from '@ember/controller';
import { set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { timeout } from 'ember-concurrency';
import { task } from 'ember-concurrency-decorators';
import { restartableTask } from 'ember-concurrency-decorators';
import { inject as service } from '@ember/service';

const DEBOUNCE_TIME = 1000;
const UNLOAD_TIME = 1000;

export default class SearchController extends Controller {
    @service ajax;

    query;

    @tracked artists;

    @tracked albums;

    @tracked tracks;

    get loading() {
        return this.updateQuery.isRunning || this.searchRecords.isRunning;
    }

    @task
    *updateQuery(event) {
        yield timeout(DEBOUNCE_TIME);
        set(this, 'query', event.target.value);
    }

    @restartableTask
    *searchRecords() {
        this.store.unloadAll();
        yield timeout(UNLOAD_TIME);
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
}
