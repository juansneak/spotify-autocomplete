import JSONAPISerializer from '@ember-data/serializer/json-api';
import ENV from 'spotify-autocomplete/config/environment';

const DEFAULT_IMG_URL = ENV.defaultImageUrl;

export default class ApplicationSerializer extends JSONAPISerializer {
    normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
        if (primaryModelClass.name === 'ArtistModel') {
            return { data: this.serializeArtist(payload) };
        }
        if (primaryModelClass.name === 'AlbumModel') {
            return { data: this.serializeAlbum(payload) };
        }
        if (primaryModelClass.name === 'TrackModel') {
            return { data: this.serializeTrack(payload) };
        }
    }

    normalize(typeHash, hash) {
        if (hash.type === 'track') {
            hash = this.serializeTrack(hash);
        }
        if (hash.type === 'album') {
            hash = this.serializeAlbum(hash);
        }
        if (hash.type === 'artist') {
            hash = this.serializeArtist(hash);
        }
        return super.normalize(typeHash, hash);
    }

    serializeAlbum(record) {
        return {
            type: record.type,
            id: record.id,
            attributes: {
                name: record.name,
                imgLg: record.images.length > 0  ? record.images[0].url : DEFAULT_IMG_URL,
                imgMd: record.images.length > 0 ? record.images[1].url : DEFAULT_IMG_URL,
                imgXs: record.images.length > 0 ? record.images[2].url : DEFAULT_IMG_URL,
                releaseDate: new Date(record.release_date).toDateString(),
            },
            relationships: {
                artist: {
                    data: { type: "artist", id: record.artists[0].id }
                }
            }
        };
    }

    serializeArtist(record) {
        return {
            type: record.type,
            id: record.id,
            attributes: {
                name: record.name,
                imgLg: record.images[0] ? record.images[0].url : DEFAULT_IMG_URL,
                imgMd: record.images[1] ? record.images[1].url : DEFAULT_IMG_URL,
                imgXs: record.images[2] ? record.images[2].url : DEFAULT_IMG_URL,
            },
        };
    }

    serializeTrack(record) {
        return {
            type: record.type,
            id: record.id,
            attributes: {
                name: record.name,
                durationMs: record.duration_ms,

            },
            relationships: {
                album: {
                    data: {
                        type: 'album',
                        id: record.album.id,
                    }
                },
            },
        };
    }

    keyForAttribute(key) {
        return key;
    }
}
