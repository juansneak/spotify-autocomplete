/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
import Formatter, { BaseOptions } from './-base';
/**
 * @private
 * @hide
 */
export default class FormatNumber extends Formatter<Intl.NumberFormatOptions> {
    static readonly type = "number";
    createNativeFormatter: (locales: string | string[], options: Intl.NumberFormatOptions) => Intl.NumberFormat;
    get options(): readonly (keyof Intl.NumberFormatOptions)[];
    format(locale: string | string[], value: number, formatOptions?: Intl.NumberFormatOptions & BaseOptions): string;
}
