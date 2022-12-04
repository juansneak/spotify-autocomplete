/// <reference types="qunit" />
/// <reference types="ember-qunit" />
import type { TestContext as BaseTestContext } from 'ember-test-helpers';
import type IntlService from 'ember-intl/services/intl';
import type { TOptions } from 'ember-intl/services/intl';
import type { Translations } from 'ember-intl/-private/store/translation';
export interface IntlTestContext {
    intl: IntlService;
}
export interface TestContext extends IntlTestContext, BaseTestContext {
}
export interface SetupIntlOptions {
    /**
     * Whether to install the special `missing-message` handler.
     *
     * @defaultValue true
     */
    missingMessage?: boolean | ((key: string, locales: string[], options: TOptions) => string);
    formats?: IntlService['formats'];
}
/**
 * Calling this helper will install a special `missing-message` util that will
 * serialize all missing translations in a deterministic manner, including
 * variables you've passed for interpolation. This means that you do not have
 * to explicitly add any translations and can just rely on the implicit
 * serialization. See the docs for detailed examples.
 *
 * Besides the `hooks` object you can also pass a `locale` string or array to
 * set the locale, as well as an object of `translations`, if you do want to
 * bootstrap translations. Both arguments are optional.
 *
 * @param {object} hooks
 * @param {string} [localeOrTranslations]
 * @param {object} [translations]
 * @param {object} [options]
 */
export default function setupIntl(hooks: NestedHooks, locale: string | string[], translations?: Translations, options?: SetupIntlOptions): void;
export default function setupIntl(hooks: NestedHooks, translations?: Translations, options?: SetupIntlOptions): void;
