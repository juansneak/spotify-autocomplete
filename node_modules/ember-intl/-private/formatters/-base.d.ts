/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
import type { SafeString } from '@ember/template/-private/handlebars';
import { Formats } from '../../types';
import type IntlMessageFormat from 'intl-messageformat';
export declare type ValueOf<ObjectType, ValueType extends keyof ObjectType = keyof ObjectType> = ObjectType[ValueType];
export interface FormatterConfig {
    onError: (info: {
        kind: unknown;
        error: unknown;
    }) => void;
    readFormatConfig: () => Formats;
}
export interface BaseOptions {
    format?: string;
}
/**
 * @private
 * @hide
 */
export default abstract class FormatterBase<KnownOptions extends {}> {
    protected readonly config: FormatterConfig;
    protected readonly readFormatConfig: () => Formats;
    static type: keyof Formats;
    protected abstract readonly createNativeFormatter: (locales: string | string[], options: KnownOptions) => Intl.DateTimeFormat | Intl.RelativeTimeFormat | Intl.NumberFormat | IntlMessageFormat;
    constructor(config: FormatterConfig);
    get options(): readonly (keyof KnownOptions)[];
    /**
     * Filters out all of the whitelisted formatter options
     *
     * @method filterKnownOptions
     * @param {Object} Options object
     * @return {Object} Options object containing just whitelisted options
     * @private
     */
    filterKnownOptions<O extends BaseOptions>(options?: O): {
        [K in keyof O & keyof KnownOptions]: O[K];
    };
    readOptions<O extends BaseOptions & KnownOptions>(formatOptions?: O): { [K in keyof O & keyof KnownOptions]: O[K]; };
    validateFormatterOptions(locale: string | string[], _formatterOptions: BaseOptions & KnownOptions): void;
    getNamedFormat(key: string): void | ValueOf<ValueOf<Required<Formats>>>;
    abstract format(locale: string | string[], value: unknown, formatOptions?: KnownOptions & BaseOptions): string | SafeString;
}
