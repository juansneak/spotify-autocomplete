import JSONAPISerializer from '@ember-data/serializer/json-api';

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
                imgLg: record.images[0].url,
                imgMd: record.images[1].url,
                imgXs: record.images[2].url,
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
                imgLg: record.images[0].url,
                imgMd: record.images[1].url,
                imgXs: record.images[2].url,
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
                        /*imgLg: record.album.images[0].url,
                        imgMd: record.album.images[1].url,
                        imgXs: record.album.images[2].url,*/
                    }
                },
            },
        };
    }

    keyForAttribute(key) {
        return key;
    }
}
