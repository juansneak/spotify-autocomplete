import Controller from '@ember/controller';
import { set, action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { timeout } from 'ember-concurrency';
import { task } from 'ember-concurrency-decorators';
import { restartableTask, dropTask } from 'ember-concurrency-decorators';
import { inject as service } from '@ember/service';

const DEBOUNCE_TIME = 1000;
const UNLOAD_TIME = 1000;
const SEARCH_LIMIT = 9;

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
                this.artists = this.store.peekAll('artist').slice(0, SEARCH_LIMIT);
                this.albums = this.store.peekAll('album').slice(0, SEARCH_LIMIT);
                this.tracks = this.store.peekAll('track').slice(0, SEARCH_LIMIT);
            } catch (error) {
                console.log("THERE WAS AN ERROR HERE!!!");
                // TODO: handle 429 error ??
                console.log(error);
            }
        }
    }

    @dropTask
    *paginateArtists(next) {
        this.store.unloadAll('artist');
        yield timeout(UNLOAD_TIME);
        yield this.ajax.paginateArtists(next, this.query);
        this.artists = this.store.peekAll('artist').slice(0, SEARCH_LIMIT);
    }

    @dropTask
    *paginateAlbums(next) {
        this.store.unloadAll('album');
        yield timeout(UNLOAD_TIME);
        yield this.ajax.paginateAlbums(next, this.query);
        this.albums = this.store.peekAll('album').slice(0, SEARCH_LIMIT);
    }

    @dropTask
    *paginateTracks(next) {
        this.store.unloadAll('track');
        yield timeout(UNLOAD_TIME);
        yield this.ajax.paginateTracks(next, this.query);
        this.tracks = this.store.peekAll('track').slice(0, SEARCH_LIMIT);
    }
}
