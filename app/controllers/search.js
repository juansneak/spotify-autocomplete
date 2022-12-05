import Controller from '@ember/controller';
import { isPresent } from '@ember/utils';
import { set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { timeout } from 'ember-concurrency';
import { task, restartableTask, dropTask } from 'ember-concurrency-decorators';
import { inject as service } from '@ember/service';
import { LIMIT } from 'spotify-autocomplete/services/ajax';

const DEBOUNCE_TIME = 1000;
const UNLOAD_TIME = 1000;

export default class SearchController extends Controller {
    @service ajax;

    query = null;

    queryParams = ['query'];

    @tracked artistOffset = 1;

    @tracked albumOffset = 1;

    @tracked trackOffset = 1;

    @tracked artists;

    @tracked albums;

    @tracked tracks;

    get limit() {
        return LIMIT - 1;
    }

    get loading() {
        return this.updateQuery.isRunning || this.searchRecords.isRunning;
    }

    clearResults() {
        this.artists = null;
        this.albums = null;
        this.tracks = null;
    }

    setResults() {
        this.artists = this.store.peekAll('artist').slice(0, this.limit);
        this.albums = this.store.peekAll('album').slice(0, this.limit);
        this.tracks = this.store.peekAll('track').slice(0, this.limit);
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
        this.clearResults();

        if (isPresent(this.query)) {
            try {
                yield this.ajax.search(this.query);
                this.setResults()
            } catch (error) {
                console.log(error);
            }
        }
    }

    @dropTask
    *paginateArtists(next) {
        this.store.unloadAll('artist');
        yield timeout(UNLOAD_TIME);
        this.artistOffset = next ? this.artistOffset + LIMIT : this.artistOffset - LIMIT;
        yield this.ajax.paginateArtists(next, this.query, this.artistOffset);
        this.artists = this.store.peekAll('artist').slice(0, this.limit);
    }

    @dropTask
    *paginateAlbums(next) {
        this.store.unloadAll('album');
        yield timeout(UNLOAD_TIME);
        this.albumOffset = next ? this.albumOffset + LIMIT : this.albumOffset - LIMIT;
        yield this.ajax.paginateAlbums(next, this.query, this.albumOffset);
        this.albums = this.store.peekAll('album').slice(0, this.limit);
    }

    @dropTask
    *paginateTracks(next) {
        this.store.unloadAll('track');
        yield timeout(UNLOAD_TIME);
        this.trackOffset = next ? this.trackOffset + LIMIT : this.trackOffset - LIMIT;
        yield this.ajax.paginateTracks(next, this.query, this.trackOffset);
        this.tracks = this.store.peekAll('track').slice(0, this.limit);
    }
}
