import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class TrackController extends Controller {
    @tracked showModal;
}
