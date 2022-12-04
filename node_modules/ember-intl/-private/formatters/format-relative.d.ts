/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
import Formatter, { BaseOptions } from './-base';
/**
 * Unit to use in the relative time internationalized message.
 *
 * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#Parameters).
 *
 * [Specification](https://tc39.es/ecma402/#sec-singularrelativetimeunit).
 */
declare type RelativeTimeFormatUnit = 'year' | 'years' | 'quarter' | 'quarters' | 'month' | 'months' | 'week' | 'weeks' | 'day' | 'days' | 'hour' | 'hours' | 'minute' | 'minutes' | 'second' | 'seconds';
/**
 * The format of output message.
 *
 * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).
 *
 * [Specification](https://tc39.es/ecma402/#sec-InitializeRelativeTimeFormat).
 */
declare type RelativeTimeFormatNumeric = 'always' | 'auto';
/**
 * The length of the internationalized message.
 *
 * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).
 *
 * [Specification](https://tc39.es/ecma402/#sec-InitializeRelativeTimeFormat).
 */
declare type RelativeTimeFormatStyle = 'long' | 'short' | 'narrow';
/**
 * An object with some or all of properties of `options` parameter
 * of `Intl.RelativeTimeFormat` constructor.
 *
 * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).
 *
 * [Specification](https://tc39.es/ecma402/#sec-InitializeRelativeTimeFormat).
 */
export interface RelativeTimeFormatOptions {
    unit?: RelativeTimeFormatUnit;
    numeric?: RelativeTimeFormatNumeric;
    style?: RelativeTimeFormatStyle;
}
/**
 * @private
 * @hide
 */
export default class FormatRelative extends Formatter<RelativeTimeFormatOptions> {
    static readonly type = "relative";
    createNativeFormatter: (locales: any, options: any) => Intl.RelativeTimeFormat;
    get options(): readonly (keyof RelativeTimeFormatOptions)[];
    format(locale: string | string[], value: ConstructorParameters<typeof Date>[0], formatOptions?: RelativeTimeFormatOptions & BaseOptions): string;
}
export {};
