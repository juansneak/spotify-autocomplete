import Model, { attr, hasMany } from '@ember-data/model';

export default class ArtistModel extends Model {
    @attr('string') name;
    @attr('string') imgXs;
    @attr('string') imgMd;
    @attr('string') imgLg;
    @hasMany('album') albums;
}
