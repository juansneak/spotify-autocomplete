/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
import type { MessageFormatElement } from 'intl-messageformat-parser';
import { NestedStructure } from 'ember-intl/-private/utils/flatten';
export declare type TranslationAST = MessageFormatElement[];
/**
 * @remarks
 * `tests/unit/helpers/t-test.ts` has a test that asserts that numbers are
 * acceptable as translations and converted to strings.
 */
export declare type Translations = NestedStructure<string | number>;
declare class Translation {
    private readonly translations;
    private readonly asts;
    private readonly _localeName;
    get localeName(): string;
    constructor(localeName: string);
    addTranslations(translations: Translations): void;
    find(key: string): void | {
        ast: TranslationAST;
        original: string;
    };
    has(key: string): boolean;
}
export default Translation;
