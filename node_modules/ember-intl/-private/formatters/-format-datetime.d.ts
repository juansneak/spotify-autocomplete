/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
import Formatter, { BaseOptions } from './-base';
/**
 * @private
 * @hide
 */
export default abstract class FormatDateTime extends Formatter<Intl.DateTimeFormatOptions> {
    static readonly type: 'date' | 'time';
    createNativeFormatter: (locales: string | string[], options: Intl.DateTimeFormatOptions) => Intl.DateTimeFormat;
    get options(): readonly (keyof Intl.DateTimeFormatOptions)[];
    format(locale: string | string[], value: ConstructorParameters<typeof Date>[0], formatOptions?: Intl.DateTimeFormatOptions & BaseOptions): string;
}
