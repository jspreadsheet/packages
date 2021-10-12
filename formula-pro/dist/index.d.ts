/**
 * Official Type definitions for JSS Formula Premium
 * https://jspreadsheet.com/products/formula
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 */

interface formula {
    (expression: string, variables?: object, x?: number, y?: number, instance?: Function): any

    [key: string]: any
}

export declare function formula(expression: string, variables?: object, x?: number, y?: number, instance?: Function): any
