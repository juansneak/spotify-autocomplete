import Service from '@ember/service';
import { run } from '@ember/runloop';
import Evented from '@ember/object/evented';
import { set, setProperties } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ResolutionManagerService extends Service.extend(Evented) {
    tablet = 1024;

    mobile = 780;

    smallMobile = 767;

    get isDesktop() {
        return !this.isTablet && !this.isMobile && !this.isSmallMobile;
    }

    @tracked isTablet = false;

    @tracked isMobile = false;

    @tracked isSmallMobile = false;

    body = window.document.body;

    init() {
        super.init(...arguments);
        this._init();
    }

    _init() {
        this.setScreenType();
        this._resizeObserver = () => {
            run(() => {
                this.trigger('windowResized');
                this.setScreenType();
            });
        };
        window.addEventListener('resize', this._resizeObserver);
    }

    destroy() {
        super.destroy(...arguments);
        window.removeEventListener('resize', this._resizeObserver);
    }

    setScreenType() {
        const {
            tablet,
            mobile,
            smallMobile,
        } = this;
        const windowWidth = this.body.clientWidth;

        setProperties(this, {
            isTablet: false,
            isMobile: false,
            isSmallMobile: false,
        });
        if (windowWidth <= tablet && windowWidth > mobile) {
            set(this, 'isTablet', true);
        } else if (windowWidth <= mobile && windowWidth > smallMobile) {
            set(this, 'isMobile', true);
        } else if (windowWidth <= smallMobile) {
            set(this, 'isSmallMobile', true);
        }
        this.trigger('screenTypeUpdated');
    }

    _resizeObserver = null;
}
