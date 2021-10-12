/**
 * Official Type definitions for JSS Formula Premium
 * https://jspreadsheet.com/products/parser
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 */

interface parser {
    (): any
    [key: string]: any
}

interface options {
    url: string
    file: object
}

export declare function parser(options: options): any
