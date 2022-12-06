import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';

export default class ResultListComponent extends Component {
    @tracked artistsTabActive = true;

    @tracked albumsTabActive = false;

    @tracked tracksTabActive = false;

    @action
    showArtistsTab() {
        this.artistsTabActive = true;
        this.albumsTabActive = false;
        this.tracksTabActive = false;
    }

    @action
    showAlbumsTab() {
        this.artistsTabActive = false;
        this.albumsTabActive = true;
        this.tracksTabActive = false;
    }

    @action
    showTracksTab() {
        this.artistsTabActive = false;
        this.albumsTabActive = false;
        this.tracksTabActive = true;
    }
}
