import Service, { inject as service } from '@ember/service';
import ENV from 'spotify-autocomplete/config/environment';

const SEARCH_TYPE = 'album,artist,track';
const ARTIST_TYPE = 'artist';
const ALBUM_TYPE = 'album';
const TRACK_TYPE = 'track';
const LIMIT = 10;

export default class AjaxService extends Service {
    @service store;

    accessToken = null;

    host = ENV.spotify.apiUrl;

    account = ENV.spotify.accountUrl;

    accountNamespace = ENV.spotify.accountNamespace;

    namespace = ENV.spotify.apiNamespace;

    grantType = ENV.spotify.grantType;

    clientId =  ENV.spotify.clientId;

    clientSecret = ENV.spotify.clientSecret;

    artistOffset = 1

    albumOffset = 1;

    trackOffset = 1;

    get headers() {
        return { Authorization: `Bearer ${this.accessToken}` };
    }

    get queryString() {
        return `grant_type=${this.grantType}&client_id=${this.clientId}&client_secret=${this.clientSecret}`;
    }

    async setAccessToken() {
        const response = await fetch(`${this.account}/${this.accountNamespace}/token?${this.queryString}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
        });

        const jsonResponse = await response.json();
        this.accessToken = jsonResponse.access_token;
    }

    async fetchAlbumTracks(id) {
        if (!this.accessToken) {
            await this.setAccessToken();
        }

        const response = await fetch(
            `${this.host}/${this.namespace}/albums/${id}/tracks`,
            { headers: this.headers }
        );
        const jsonResponse = await response.json();

        const tracks = jsonResponse.items.map((track)=>{
            return {...track, album: { id } }
        });

        this.store.pushPayload({ data: tracks });
    }

    async fetchArtistAlbums(id) {
        if (!this.accessToken) {
            await this.setAccessToken();
        }

        const response = await fetch(
            `${this.host}/${this.namespace}/artists/${id}/albums`,
            { headers: this.headers }
        );
        const jsonResponse = await response.json();
        const albums = jsonResponse.items;

        this.store.pushPayload({ data: albums });
    }

    async search(query) {
        if (!this.accessToken) {
            await this.setAccessToken();
        }

        const response = await fetch(
            `${this.host}/${this.namespace}/search?type=${SEARCH_TYPE}&limit=${LIMIT}&q=${query}`,
            { headers: this.headers }
        );
        const jsonResponse = await response.json();

        this.store.pushPayload({
            data: [
                ...jsonResponse.albums.items,
                ...jsonResponse.artists.items,
                ...jsonResponse.tracks.items
            ]
        });
    }

    async paginateArtists(next, query) {
        if (!this.accessToken) {
            await this.setAccessToken();
        }

        this.artistOffset = next ? this.artistOffset + LIMIT : this.artistOffset - LIMIT;

        const response = await fetch(
            `${this.host}/${this.namespace}/search?type=${ARTIST_TYPE}&limit=${LIMIT}&offset=${this.artistOffset}&q=${query}`,
            { headers: this.headers }
        );
        const jsonResponse = await response.json();

        this.store.pushPayload({
            data: jsonResponse.artists.items,
        });
    }

    async paginateAlbums(next, query) {
        if (!this.accessToken) {
            await this.setAccessToken();
        }

        this.albumOffset = next ? this.albumOffset + LIMIT : this.albumOffset - LIMIT;

        const response = await fetch(
            `${this.host}/${this.namespace}/search?type=${ALBUM_TYPE}&limit=${LIMIT}&offset=${this.albumOffset}&q=${query}`,
            { headers: this.headers }
        );
        const jsonResponse = await response.json();

        this.store.pushPayload({
            data: jsonResponse.albums.items,
        });
    }

    async paginateTracks(next, query) {
        if (!this.accessToken) {
            await this.setAccessToken();
        }

        this.trackOffset = next ? this.trackOffset + LIMIT : this.trackOffset - LIMIT;

        const response = await fetch(
            `${this.host}/${this.namespace}/search?type=${TRACK_TYPE}&limit=${LIMIT}&offset=${this.trackOffset}&q=${query}`,
            { headers: this.headers }
        );
        const jsonResponse = await response.json();

        this.store.pushPayload({
            data: jsonResponse.tracks.items,
        });
    }
}

