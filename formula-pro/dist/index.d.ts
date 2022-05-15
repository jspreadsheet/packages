/**
 * Official Type definitions for JSS Formula Premium
 * https://jspreadsheet.com/products/formula
 */

declare function formula(expression: string, variables?: object, x?: number, y?: number, instance?: Function): any

declare namespace formula {

    function setFormula(formulas: object) : void;

}

export = formula;
