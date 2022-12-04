/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
import type { SafeString } from '@ember/template/-private/handlebars';
import IntlMessageFormat from 'intl-messageformat';
import type { Formats } from '../../types';
import type { FormatterConfig } from './-base';
import type { TranslationAST } from '../store/translation';
/**
 * @private
 * @hide
 */
export default class FormatMessage {
    static readonly type = "message";
    protected readonly config: FormatterConfig;
    protected readonly readFormatConfig: () => Formats;
    constructor(config: FormatterConfig);
    createNativeFormatter: (ast: TranslationAST, locales: string | string[], formatConfig?: Partial<Formats> | undefined) => IntlMessageFormat;
    format(locale: string | string[], maybeAst: string | TranslationAST, options?: Partial<Record<string, unknown>> & {
        htmlSafe?: false;
    }): string;
    format(locale: string | string[], maybeAst: string | TranslationAST, options: Partial<Record<string, unknown>> & {
        htmlSafe: true;
    }): SafeString;
}
