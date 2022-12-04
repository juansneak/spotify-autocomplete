import Model, { attr, belongsTo } from '@ember-data/model';

export default class TrackModel extends Model {
    @attr('string') name;
    @attr('number') durationMs;
    @belongsTo('album') album;
}
