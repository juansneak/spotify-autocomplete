import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class AlbumModel extends Model {
    @attr('string') name;
    @attr('string') imgXs;
    @attr('string') imgMd;
    @attr('string') imgLg;
    @attr('string') releaseDate;
    @belongsTo('artist') artist;
    @hasMany('track') tracks;
}
