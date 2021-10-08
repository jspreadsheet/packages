/**
 * Official Type definitions for Jspreadsheet Pro v8
 * https://jspreadsheet.com
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 */

declare function jspreadsheet(element?: HTMLElement, options?: jspreadsheet.Spreadsheet): Array<jspreadsheet.worksheetInstance>;

declare namespace jspreadsheet {

    /** License string */
    let license: string | null;

    /** Set the license globaly to all spreadsheets and extensions */
    function setLicense(license: string) : void;

    /** Set extensions to the JSS spreadsheet. Example { formula, parser, render } */
    function setExtensions(extensions: object) : void;

    interface Toolbar {
        /** Array of items for the toolbar */
        items: Array<ToolbarItem>;
    }

    interface ToolbarItem {
        /** Toolbar item type */
        type?: 'icon' | 'divisor' | 'label' | 'select';
        /** Content of the toolbar element */
        content?: string;
        /** Tooltip for the toolbar element */
        tooltip?: string;
        /** Toolbar element width */
        width?: number;
        /** The initial selected option for the type: select */
        value?: string;
        /** Render method parser for the elements in the dropdown when type: select */
        render?: Function;
        /** When a item is clicked */
        onclick?: Function;
        /** For the type select when a new item is selected */
        onchange?: Function;
        /** To update the state of this item **/
        updateState?: Function;
    }

    interface Dropdown {
        /** Render type: default | picker | searchbar */
        type?: 'default' | 'picker' | 'searchbar';
        /** Dropdown input placeholder */
        placeholder?: string;
        /** The user can add new options to the dropdown. */
        newOptions?: boolean;
        /** Enabled the remote search features. */
        remoteSearch?: boolean;
        /** Remote backend to respond to the search. */
        url?: string;
        /** When the user add a new item to the dropdown. */
        oninsert?: Function;
    }

    interface DropdownItem {
        /** Value of the selected item. */
        id?: string | number;
        /** Label for the selected item. */
        name?: string;
        /** Description of the item */
        title?: string;
        /** Icon of the item */
        image?: string;
        /** Name of the group where the item belongs to */
        group?: string;
        /** Keywords to help finding one item */
        synonym?: Array<string>;
        /** Item is disabled */
        disabled?: boolean;
        /** Color for the item */
        color?: string;
    }

    interface Calendar {
        /** Render type. Default: 'default' */
        type?: 'default' | 'year-month-picker';
        /** Disable the dates out of the defined range. */
        validRange?: Array<number>;
        /** The calendar starts in a day of week (0 for Sunday - 6 for Saturday). Default: 0 (Sunday) */
        format?: string;
        /** Calendar input is readonly */
        readonly?: boolean;
        /** Select today automatically when no date value is defined. */
        today?: boolean;
        /** Show hour and minute dropdown. */
        time?: boolean;
        /** Show reset button. Default: true */
        resetButton?: boolean;
        /** Calendar input placeholder. */
        placeholder?: string;
    }

    interface Column {
        /** Define the column type. Can be a string to define a native editor, or a method to define the custom editor plugin. */
        type?: Editor | 'autocomplete' | 'calendar' | 'checkbox' | 'color' | 'dropdown' | 'hidden' | 'html' | 'image' | 'numeric' | 'radio' | 'text';
        /** Column title */
        title?: string;
        /** Name or a path of a property when the data is a JSON object. */
        name?: string;
        /** Define the onmouseover tooltip for the column header. */
        tooltip?: string;
        /** Width of the column */
        width?: number;
        /** Visibility of a column */
        visible?: boolean,
        /** Column alignment. Default: center */
        align?: 'center' | 'left' | 'right' | 'justify';
        /** It is a method to overwrite the column definitions in real-time just before the column edition. */
        filterOptions?: Function;
        /** Load the items from the dropdown from a remote URL. */
        url?: string;
        /** Define the items in the dropdown and autocomplete column type. */
        source?: Array<DropdownItem>;
        /** Define the dropdown or autocomplete to accept multiple options. */
        multiple?: boolean;
        /** Define the input mask for the data cell. @see https://jsuites.net/v4/javascript-mask */
        mask?: string;
        /** Decimal representation character. */
        decimal?: '.' | ',';
        /** Truncate the string in the cell by any number of characters. */
        truncate?: number,
        /** Disable the mask when editing. */
        disabledMaskOnEdition?: boolean;
        /** It defines a renderer method or rule for the cell content. */
        render?: string | Function;
        /** Define the format of the date or numbers in the cell. Default for the calendar: DD/MM/YYYY */
        format?: string;
        /** Define the column as primaryKey. */
        primaryKey?: boolean;
        /** Extended configuration for one column. */
        options?: Calendar | Dropdown;
        /** The column is read-only */
        readOnly?: boolean;
        /** Wrap the text in the column */
        wordWrap?: boolean;
        /** Process the raw data when copy or download. Default: true */
        process?: boolean;
    }

    interface Row {
        /** Row height in pixels. */
        height?: number;
        /** Row identification. */
        title?: string;
    }

    interface Editor {
        /** createCell  When a new cell is created. */
        createCell: (cell: HTMLElement, value: any, x: number, y: number, instance: object, options: object) => any;
        /** updateCell  When the cell value changes. */
        updateCell: (cell: HTMLElement, value: any, x: number, y: number, instance: object, options: object) => any;
        /** openEditor  When the user starts the edition of a cell. */
        openEditor: (cell: HTMLElement, value: any, x: number, y: number, instance: object, options: object) => any;
        /** closeEditor When the user finalizes the edition of a cell. */
        closeEditor: (cell: HTMLElement, confirmChanges: boolean, x: number, y: number, instance: object, options: object) => any;
        /** get Transform the raw data into processed data. It will shown a text instead of an id in the type dropdown for example. */
        get: (options: object, value: any) => String
    }

    interface Plugin {
        /** When a new worksheet is added. */
        init?: (worksheet: Object) => void;
        /** It would receive a call for every spreadsheet event. */
        onevent?: (event: String, a?: any, b?: any, c?: any, d?: any) => void;
        /** When the spreadsheet needs to save something in the server. */
        persistence?: (method: String, args: Object) => void;
        /** When the user opens the context menu. */
        contextMenu?: (instance: Object, x: Number, y: Number, e: MouseEvent, items: [], section: String, a: any, b?: any) => void;
        /** When the toolbar is create and clicked. */
        toolbar?: (instance: Object, items: []) => void;
    }

    interface Nested {
        /** Nested header title */
        title?: string;
        /** Nested header tooltip */
        tooltip?: string;
        /** Nested header colspan */
        colspan?: number;
    }

    interface Spreadsheet {
        /** Your application name */
        application? : string;
        /** Render a remote spreadsheet from Jspreadsheet Cloud, which is a serveless hosting service. That can be generate at https://jspreadsheet.com/cloud */
        cloud? : string;
        /** DOM element for binding the javascript events. This property is normally used when JSS is running as a web component. */
        root? : HTMLElement;
        /** Global defined names. It defines global range variables. **/
        definedNames?: Record<string, string>,
        /** Global sorting handler. **/
        sorting?: (direction: boolean, column: number) => number;
        /** Remote URL for the persistence server **/
        server?: string,
        /**  Allow table edition */
        editable?: boolean;
        /** Allow data export */
        allowExport?: boolean;
        /** Include the table headers in the first row of the data */
        includeHeadersOnDownload?: boolean;
        /** Force update on paste for read-only cells */
        forceUpdateOnPaste?: boolean;
        /** Enable loading spin when loading data. Default: false. */
        loadingSpin?: boolean;
        /** Render jspreadsheet spreadsheet on full screen mode. Default: false */
        fullscreen?: boolean;
        /** Make sure the formulas are capital letter. Default: true */
        secureFormulas?: boolean;
        /** Enable formula debug. Default: false **/
        debugFormulas?: boolean,
        /** Execute formulas. Default: true */
        parseFormulas?: boolean;
        /** Disable the formula editor. Default: true **/
        editorFormulas?: boolean;
        /** Auto increment cell data when using the corner copy, including formulas, numbers and dates. Default: true */
        autoIncrement?: boolean;
        /** Try to cast numbers from cell values when executing formulas. Default: true */
        autoCasting?: boolean;
        /** Remove any HTML from the data and headers. Default: true */
        stripHTML?: boolean;
        /** Allow tabs. Default: false */
        tabs?: boolean;
        /** Allow the user to delete worksheets. Default: true **/
        allowDeleteWorksheet?: boolean;
        /** Allow the user to rename worksheets. Default: true **/
        allowRenameWorksheet?: boolean;
        /** Allow the user to drag and drop the worksheets. Default: true **/
        allowMoveWorksheet?: boolean;
        /** This method is called when the data in the spreadsheet is ready. */
        onload?: (spreadsheet: spreadsheetInstance) => void;
        /** Spreadsheet is clicked **/
        onclick?: (worksheet: worksheetInstance, section: String, x: Number, y: Number) => void;
        /** When undo is applied */
        onundo?: (worksheet: worksheetInstance, historyRecord: Object) => void;
        /** When redo is applied */
        onredo?: (worksheet: worksheetInstance, historyRecord: Object) => void;
        /** Before any data is sent to the backend. Can be used to overwrite the data or to cancel the action when return false. */
        onbeforesave?: (worksheet: worksheetInstance, instance: Object, data: []) => Boolean | [];
        /** After something is saved */
        onsave?: (worksheet: worksheetInstance, instance: Object, data: []) => void;
        /** Before a column value is changed. NOTE: It is possible to overwrite the original value, by return a new value on this method. */
        onbeforechange?: (worksheet: worksheetInstance, cell: Element, x: Number, y: Number, value: String) => String;
        /** After a column value is changed. */
        onchange?: (worksheet: worksheetInstance, cell: HTMLElement, x: Number, y: Number, newValue: String, oldValue: String) => void;
        /** Event: onafterchanges(jspreadsheetHTMLElement, jspreadsheetInstance) */
        onafterchanges?: (worksheet: worksheetInstance, records: Array<any>) => void;
        /** When a copy is performed in the spreadsheet. Any string returned will overwrite the user data or return null to progress with the default behavior. */
        oncopy?: (worksheet: worksheetInstance, selectedCells: [], data: String) => String;
        /** Before the paste action is performed. Can return parsed or filtered data, can cancel the action when return false. */
        onbeforepaste?: (worksheet: worksheetInstance, data: String, x: Number, y: Number) => [];
        /** After a paste action is performed in the spreadsheet. */
        onpaste?: (worksheet: worksheetInstance, data: []) => void;
        /** Before a new row is inserted. You can cancel the insert event by returning false. */
        onbeforeinsertrow?: (worksheet: worksheetInstance, rowNumber: Number, numOfRows: Number, insertBefore: Boolean) => Boolean | undefined;
        /** After a new row is inserted. */
        oninsertrow?: (worksheet: worksheetInstance, rowNumber: Number, numOfRows: Number, insertBefore: Boolean) => void;
        /** Before a row is deleted. You can cancel the delete event by returning false. */
        onbeforedeleterow?: (worksheet: worksheetInstance, rowNumber: Number, numOfRows: Number) => Boolean | undefined;
        /** After a row is excluded. */
        ondeleterow?: (worksheet: worksheetInstance, rowNumber: Number, numOfRows: Number, rowHTMLElements: [], rowData: [], cellAttributes: []) => void;
        /** Before a new column is inserted. You can cancel the insert event by returning false. */
        onbeforeinsertcolumn?: (worksheet: worksheetInstance, columnNumber: Number, numOfColumns: Number, insertBefore: Boolean) => Boolean | undefined;
        /** After a new column is inserted. */
        oninsertcolumn?: (worksheet: worksheetInstance, columnNumber: Number, numOfColumns: Number, historyRecords: [], insertBefore: Boolean) => void;
        /** Before a column is excluded. You can cancel the insert event by returning false. */
        onbeforedeletecolumn?: (worksheet: worksheetInstance, columnNumber: Number, numOfColumns: Number) => Boolean | undefined;
        /** After a column is excluded. */
        ondeletecolumn?: (worksheet: worksheetInstance, columnNumber: Number, numOfColumns: Number, affectedHTMLElements: [], historyProperties: [], cellAttributes: []) => void;
        /** After a row is moved to a new position. */
        onmoverow?: (worksheet: worksheetInstance, origin: Number, destination: Number) => void;
        /** After a column is moved to a new position. */
        onmovecolumn?: (worksheet: worksheetInstance, origin: Number, destination: Number) =>  void;
        /** After a height change for one or more rows. */
        onresizerow?: (worksheet: worksheetInstance, row: Number | [], height: Number | [], oldHeight: Number | []) => void;
        /** After a column width change for one or more columns. */
        onresizecolumn?: (worksheet: worksheetInstance, column: Number | [], width: Number | [], oldWidth: Number | []) => void;
        /** When the selection is changed. */
        onselection?: (worksheet: worksheetInstance, px: Number, py: Number, ux: Number, uy: Number, origin: Number) => void;
        /** Before a new comment is added or updated. Return false to cancel the event. */
        onbeforecomments?: (worksheet: worksheetInstance, cells: Object) => Boolean | undefined;
        /** After a new comment is added or updated. */
        oncomments?: (worksheet: worksheetInstance, cells: Object) => void;
        /** It runs before sorting a column. It should return an array with a custom sorting or false to cancel the user action. */
        onbeforesort?: (worksheet: worksheetInstance, column: Number, direction: Number, newOrderValues: []) => Boolean | [] | undefined;
        /** When a column is sorted. */
        onsort?: (worksheet: worksheetInstance, column: Number, direction: Number, newOrderValues: []) => void;
        /** When the spreadsheed gets the focus. */
        onfocus?: (worksheet: worksheetInstance) => void;
        /** When the spreadsheet loses the focus. */
        onblur?: (worksheet: worksheetInstance) => void;
        /** When merge cells is executed. */
        onmerge?: (worksheet: worksheetInstance, cellName: String, colspan: Number, rowspan: Number) => void;
        /** When the header title is changed. */
        onchangeheader?: (worksheet: worksheetInstance, column: Number, newValue: String, oldValue: String) => void;
        /** When the footers are created or updated. */
        onchangefooter?: (worksheet: worksheetInstance, column: Number, newValue: String, oldValue: String) => void;
        /** When the value in a cell footer is changed. */
        onchangefootervalue?: (worksheet: worksheetInstance, x: Number, y: Number, value: String) => void;
        /** When an editor is created. */
        oncreateeditor?: (worksheet: worksheetInstance, cell: HTMLElement, x: Number, y: Number, element: HTMLElement, options: Object) => void;
        /** When the editor is opened. **/
        oneditionstart?: (worksheet: worksheetInstance, cell: HTMLElement, x: Number, y: Number) => void;
        /** When the editor is closed. **/
        oneditionend?: (worksheet: worksheetInstance, cell: HTMLElement, x: Number, y: Number, newValue: [], save: Boolean) => void;
        /** When the style of a cell is changed. */
        onchangestyle?: (worksheet: worksheetInstance, mixed: [], key: String, value: String) => void;
        /** When a cell meta information is added or updated. */
        onchangemeta?: (worksheet: worksheetInstance, mixed: [], key: String, value: String) => void;
        /** Before the page is changed. Can cancel the action when return is false. */
        onbeforechangepage?: (worksheet: worksheetInstance, pageNumber: Number, oldPage: Number, quantityPerPage: Number) => Boolean | undefined;
        /** When pagination is enabled and the user changes the page. */
        onchangepage?: (worksheet: worksheetInstance, pageNumber: Number, oldPageNumber: Number) => void;
        /** Add or change the options of a new worksheet. */
        onbeforecreateworksheet?: (worksheet: Worksheet, index: Number) => Object;
        /** When the user creates a new worksheet. */
        oncreateworksheet?: (worksheet: worksheetInstance, options: Worksheet, index: Number) => void;
        /** When the user renames a worksheet. */
        onrenameworksheet?: (worksheet: worksheetInstance, worksheetNumber: Number, newValue: String, oldValue: String) => void;
        /** >When the user deletes a worksheet. */
        ondeleteworksheet?: (worksheet: worksheetInstance, worksheetNumber: Number) => void;
        /** When the user updates the worksheet tab position. */
        onmoveworksheet?: (worksheet: worksheetInstance, from: Number, to: Number) => void;
        /** When the user opens a worksheet. */
        onopenworksheet?: (worksheet: worksheetInstance, index: Number) => void;
        /** When there is a row id update */
        onchangerowid?: (worksheet: worksheetInstance, rows: []) => void;
        /** Action to be executed before searching. The accepted method return would be: null to continue with the default behavior, false to cancel the user action or an array with the row numbers to overwrite the default result. */
        onbeforesearch?: (worksheet: worksheetInstance, query: String, results: []) => [];
        /** After the search is applied to the rows. */
        onsearch?: (worksheet: worksheetInstance, query: String, results: []) => void;
        /** Action to be executed before filtering rows. It can cancel the action by returning false. */
        onbeforefilter?: (worksheet: worksheetInstance, filters: [], data: []) => void;
        /** After the filter has been applied to the rows. */
        onfilter?: (worksheet: worksheetInstance, filters: [], data: []) => void;
        /** When a new cell is created **/
        oncreatecell?: (worksheet: worksheetInstance, cell: HTMLElement, x: Number, y: Number, value: any) => void;
        /** Run every single table update action. Can bring performance issues if perform too much changes. */
        updateTable?: (worksheet: worksheetInstance, cell: Object, x: Number, y: Number, value: String) => void;
        /** Return false to cancel the contextMenu event, or return custom elements for the contextmenu. */
        contextmenu?: (worksheet: worksheetInstance, x: Number, y: Number, e: Event, section: String, section_argument1: String | Number, section_argument2: String | Number) => [];
        /** The first row is the header titles when parsing a HTML table */
        parseTableFirstRowAsHeader?: boolean,
        /** Try to identify a column type when parsing a HTML table */
        parseTableAutoCellType?: boolean,
        /** Global cell wrapping. Default: false */
        wordWrap?: boolean;
        /** About information */
        about?: string | Function,
        /** License string */
        license?: string,
        /** Worksheets */
        worksheets?: Array<Worksheet>;
    }

    interface Worksheet {
        /** Logo URL **/
        logo?: string
        /** Load the data from an external server URL */
        url?: string;
        /** Persitence URL or true when the URL is the same of the URL of the data source */
        persistence? : string | boolean;
        /** Allow internal sequence for new rows */
        sequence? : boolean;
        /** Load the data into a new spreadsheet from an array of rows or objects */
        data? : Array<any> ;
        /** Deprected. Please use the data property. */
        json? : Array<Record<string, any>>;
        /** Array with the rows properties definitions such as title, height. */
        rows? : Row[];
        /** The column properties define the behavior of a column and the associated editor */
        columns? : Array<Column>;
        /** Define the properties of a cell. This property overwrite the column definitions */
        cells?: Record<string, Column>;
        /** Role of this worksheet **/
        role?: string,
        /** Nested headers definition */
        nestedHeaders?: Array<Nested>;
        /** Default column width. Default: 50px */
        defaultColWidth?: number | string;
        /** Default row height. Default: null */
        defaultRowHeight?: number | string;
        /** Default alignment for a new column: [center, left, right] */
        defaultColAlign?: 'center' | 'left' | 'right' | 'justify';
        /** Minimum number of spare rows. Default: 0 */
        minSpareRows?: number;
        /** Minimum number of spare cols. Default: 0 */
        minSpareCols?: number;
        /** Minimum table dimensions: [numberOfColumns, numberOfRows] */
        minDimensions?: [number, number];
        /** CSV data source URL */
        csv?: string;
        /** CSV default filename for the jspreadsheet exports. Default: 'jspreadsheet' */
        csvFileName?: string;
        /** Consider first line as header. Default: true */
        csvHeaders?: boolean;
        /** Delimiter to consider when dealing with the CSV data. Default: ',' */
        csvDelimiter?: boolean;
        /** Allow column sorting */
        columnSorting?: boolean;
        /** Allow column dragging */
        columnDrag?: boolean;
        /** Allow column resizing */
        columnResize?: boolean;
        /** Allow row resizing */
        rowResize?: boolean;
        /** Allow row dragging */
        rowDrag?: boolean;
        /**  Allow table edition */
        editable?: boolean;
        /** Allow new rows */
        allowInsertRow?: boolean;
        /** Allow new rows to be added using tab key. Default: true */
        allowManualInsertRow?: boolean;
        /** Allow new columns to be added using enter key. Default: true */
        allowInsertColumn?: boolean;
        /** Allow new rows to be added via script. Default: true */
        allowManualInsertColumn?: boolean;
        /** Allow rows to be deleted. Default: true */
        allowDeleteRow?: boolean;
        /** Allow all rows to be deleted. Warning: no rows left can lead to undesirabled behavior. Default: false */
        allowDeletingAllRows?: boolean;
        /** Allow columns to be deleted. Default: true */
        allowDeleteColumn?: boolean;
        /** Allow rename column. Default: true */
        allowRenameColumn?: boolean;
        /** Allow users to add comments to the cells. Default: false */
        allowComments?: boolean;
        /** Corner selection and corner data cloning. Default: true */
        selectionCopy?: boolean,
        /** Merged cells. Default: null */
        mergeCells?: Record<string, []>,
        /** Allow search on the spreadsheet */
        search?: boolean;
        /** Activate pagination and defines the number of records per page. Default: false */
        pagination?: number;
        /** Dropdown for the user to change the number of records per page. Example: [10,25,50,100]. Default: false */
        paginationOptions?: boolean | Array<number> ;
        /** Table overflow. Default: false */
        tableOverflow?: boolean;
        /** Allow the user to resize the table when tableOverflow is active. Default: false */
        tableOverflowResizable?: boolean;
        /** Define the table overflow height. Example: '300px' */
        tableHeight?: number | string;
        /** Define the table overflow width. Example: '800px' */
        tableWidth?: number | string;
        /** Initial comments. Default: null */
        comments?: Record<string, string>;
        /** Initial meta information. Default: null */
        meta?: Record<string, any>;
        /** Style */
        style?: Record<string, string>;
        /** Freeze columns. Default: 0 */
        freezeColumns?: number;
        /** Initial sorting [colNumber, direction]. Default: null */
        orderBy?: [number, boolean];
        /** Worksheet Unique Id. **/
        worksheetId?: string;
        /** Worksheet Name. **/
        worksheetName?: string;
        /** Worksheet state: hidden | null. Hide a worksheet **/
        worksheetState?: 'hidden' | undefined;
        /** Enable the column filters */
        filters?: boolean;
        /** Footers */
        footers?: Array<any>;
        /** Apply mask on footers */
        applyMaskOnFooters?: boolean;
        /** Define options for the plugins. Each key should be the pluginName. */
        pluginOptions?: Record<string, any>;
        /** This is a internal controller for the spreadsheet locked properties. Please use editable to make it readonly. */
        locked?: boolean;
        /** Allow the selection of unlocked cells. Default: true. */
        selectUnLockedCells?: boolean;
        /** Allow the selection of locked cells. Default: true. */
        selectLockedCells?: boolean;
    }

    interface spreadsheetInstance {
        /** Spreadsheet configuration */
        config?: Spreadsheet;
        /** Contextmenu HTMLElement */
        contextmenu?: HTMLElement;
        /** Create a new worksheet from the given settings */
        createWorksheet?: (options: Worksheet) => void;
        /** Delete an existing worksheet by its position */
        deleteWorksheet?: (position: Number) => void;
        /** DOM Element */
        el?: HTMLElement;
        /** DOM Element. Alias for el */
        element?: HTMLElement;
        /** DOM Element container for the filters */
        filters?: HTMLElement;
        /** Toggle the fullscreen mode */
        fullscreen?: (state: Boolean) => void;
        /** Get the toolbar object definitions */
        getToolbar?: Toolbar,
        /** Set the toolbar */
        setToolbar?: (toolbar: Toolbar) => void;
        /** Show the toolbar for the worksheet */
        showToolbar?: () => void;
        /** Hide the toolbar for the worksheet */
        hideToolbar?: () => void;
        /** Get the worksheet by its id */
        getWorksheet?: (id: String) => Number;
        /** Get the active worksheet when applicable */
        getWorksheetActive?: () => worksheetInstance;
        /** Get the worksheet instance by its position */
        getWorksheetInstance?: (position: Number) => worksheetInstance;
        /** HTMLElement Helper */
        helper?: HTMLElement,
        /** Array with the history information */
        history?: [];
        /** Internal history index position */
        historyIndex?: Boolean;
        /** Ignore events */
        ignoreEvents?: Boolean;
        /** Ignore history events */
        ignoreHistory?: Boolean;
        /** Ignore persistence events */
        ignorePersistence?: Boolean;
        /** HTMLElement editor container **/
        input?: HTMLElement;
        /** HTMLElement loading element **/
        loading?: HTMLElement;
        /** Rename an existing worksheet by its position */
        renameWorksheet?: (position: Number, title: String) => void;
        /** Move the position of a worksheet tab */
        moveWorksheet?: (from: Number, to: Number, updateDom: Boolean) => void;
        /** Open a worksheet */
        openWorksheet?: (position: Number) => void;
        /** Get the worksheet name */
        getWorksheetName?: () => String;
        /** Spreadsheet unique name */
        name?: string;
        /** List of plugins loaded to the spreadsheet */
        plugins?: Record<number, Plugin>;
        /** Processing flag. It would be true when the spreadsheet is loading. */
        processing?: boolean;
        /** Show progressbar */
        progress?: (state: boolean) => void;
        /** Queue of formulas used during the loading */
        queue?: Array<string>;
        /** Undo */
        undo?: () => void;
        /** Redo */
        redo?: () => void;
        /** DOM Textarea helper */
        textarea?: HTMLElement;
        /** DOM toolbar */
        toolbar?: HTMLElement;
        /** Tools HTMLElement container */
        tools?: HTMLElement;
        /** Worksheets container */
        worksheets?: Array<Worksheet>;
    }

    interface worksheetInstance {
        /** Spreadsheet object */
        parent?: spreadsheetInstance;
        /** Array with the borders information */
        borders?: [];
        /** Start the edition for one cell */
        openEditor?: (cell: HTMLElement, empty: Boolean, mouseEvent: Object) => void;
        /** Close the editon for one cell */
        closeEditor?: (cell: HTMLElement, save: Boolean) => void;
        /** Array with the column width controllers */
        colgroup?: [];
        /** Hold the colgroup container */
        colgroupContainer?: HTMLElement;
        /** Cut */
        cut?: () => void;
        /** Copy */
        copy?: () => void;
        /** Paste */
        paste?: (x: Number, y: Number, data: String) => void;
        /** DOM Corner square */
        corner?: HTMLElement;
        /**
         * Get the worksheet data
         *
         * @param {boolean} only the selected cells
         * @param {boolean} get the raw or processed data
         * @param {string} Null the return will be an array. With this argument, the return will be a string separated by the character defined.
         * @return {array} array of data
         */
        data?: (highlighted: boolean, processedData: boolean, delimiter: string) => Array<Array<any>> | string
        /** Internal type to defined JSON or ARRAY */
        dataType?: number,
        /** Change a row position */
        moveRow?: (from: Number, to: Number) => void;
        /** Add a new row */
        insertRow?: (numOfRows: Number, rowNumber: Number, insertBefore: Boolean, data: []) => void;
        /** Delete an existing row */
        deleteRow?: (rowNumber: Number, numOfRows: Number) => void;
        /** Change a column position */
        moveColumn?: (from: Number, to: Number) => void;
        /** Add a new column */
        insertColumn?: (numOfColumns: Number, columnNumber: Number, insertBefore: Boolean, properties: Column, data: []) => void;
        /** Delete an existing column */
        deleteColumn?: (columnNumber: Number, numOfColumns: Number) => void;
        /** Get the merged cells. Cellname: A1, A2, etc */
        getMerge?: (cellName: String) => void;
        /** Get the merged cells. Cellname: A1, A2, etc */
        setMerge?: (cellName: String, colspan: Number, rowspan: Number, forceOverwrite: Boolean) => void;
        /** Remove the merged cells by the cellname */
        removeMerge?: (cellName: String) => void;
        /** Destroy all merged cells */
        destroyMerged?: () => void;
        /** Verify if one col + row is merged and return or not the merge cell */
        isMerged?: (x: Number, y: Number, getParent: Boolean) => Boolean | [];
        /** Verify if the col has any merged cells */
        isColMerged?: (x: Number) => Boolean;
        /** Verify if the col has any merged cells */
        isRowMerged?: (y: Number) => Boolean;
        /** Internal method: event dispatch controllers */
        dispatch?: (event: String) => void;
        /** Navigation up */
        up?: () => void;
        /** Navigation down */
        down?: () => void;
        /** Navigation left */
        left?: () => void;
        /** Navigation right */
        right?: () => void;
        /** Navigation last */
        last?: () => void;
        /** Navigation first */
        first?: () => void;
        /** Download CSV */
        download?: (includeHeaders: Boolean, processed: Boolean) => void;
        /** DOM Worksheet */
        worksheet?: HTMLElement;
        /** DOM Worksheet. Alias for worksheet */
        element?: HTMLElement;
        /** Internal method: Execute a formula */
        executeFormula?: (expression: String, x: Number, y: Number, caching: Boolean) => void;
        /** Footers */
        footers?: Record<string, string>;
        /** Formula chain */
        formula?: [];
        /** Toggle the fullscreen mode */
        fullscreen?: (state: Boolean) => void;
        /** Get the border */
        getBorder?: (alias: string) => object;
        /** Set borders with a border name and color. */
        setBorder?: (x1: Number, y1: Number, x2: Number, y2: Number, border: String, color: String) => void;
        /** Reset the borders by name border name */
        resetBorders?: (border: String, resetPosition: Boolean) => void;
        /** Refresh the borders by the border name */
        refreshBorders?: (border: String) => void;
        /** Reset the main selection */
        resetSelection?: () => void;
        /** Get the cell element from the cellname */
        getCell?: (cellName: String) => Object;
        /** Get the cell element from its coordinates */
        getCellFromCoords?: (x: Number, y: Number) => [];
        /** Get attributes from one cell when applicable */
        getCells?: (cellName: String) => Column;
        /** Set attributes for one cell */
        setCells?: (cellName: String, settings: Column) => void;
        /**
         * Get the worksheet data
         *
         * @param {boolean} only the selected cells
         * @param {boolean} get the raw or processed data
         * @return {array} array of data
         */
        getData?: (highlighted: Boolean, processed: Boolean) => [];
        /** Reset the table data */
        setData?: (data: []) => void;
        /** Get the column position by its name */
        getColumnIdByName?: (name: String) => Number;
        /** Get the settings for one column. Row its optional when need to get the information from one specific cell. */
        getColumnOptions?: (x: Number, y: Number) => void;
        /** Get the column object by its position */
        getColumn?: (position: Number) => Object;
        /** Set the column properties by its position */
        setColumn?: (position: Number, settings: Object) => void;
        /** Get the column data from its number */
        getColumnData?: (col: Number, processed: Boolean) => [];
        /** Set the column data from its number */
        setColumnData?: (col: Number, data: [], force: boolean) => void;
        /** Get the data from one row */
        getRowData?: (row: Number) => [];
        /** Set the data from one row */
        setRowData?: (row: Number, data: [], force: boolean) => void;
        /** Get the row id from its position */
        getRowId?: (row: Number) => Number;
        /** Set the row id from its position */
        setRowId?: (row: Number, newId: Number) => void;
        /** Get the primaryKey column when applicable. */
        getPrimaryKey?: () => Number;
        /** Get the next available number in the sequence */
        getNextSequence?: () => Number;
        /** Get a row data or meta information by Id. */
        getRowById?: (row: Number, element: boolean) => Object;
        /** Get the defined name or defined names when key is null */
        getDefinedNames?: (key?: string) => object;
        /** Set the defined name */
        setDefinedNames?: (key: string, value: string) => void;
        /** Internal method: Get the editor for one cell */
        getEditor?: (x: Number, y: Number) => Object;
        /** Internal method: Get the filter */
        getFilter?: (column: number) => Array<any>;
        /** Get the footers configuration */
        getFooter?: () => Array<any>;
        /** Get the footer value */
        getFooterValue?: (col: number, row: number) => any;
        /** Set the footer value */
        setFooterValue?: (col: number, row: number, value: any) => void;
        /** Get processed data by the coordinates of the cell */
        getProcessed?: (col: number, row: number, extended: boolean) => void;
        /** Hide the search container */
        showSearch?: () => void;
        /** Hide the search container */
        hideSearch?: () => void;
        /** DOM Contextmenu */
        contextMenu?: HTMLElement;
        /** DOM Worksheet container */
        content?: HTMLElement;
        /** DOM Worksheet table */
        table?: HTMLElement;
        /** DOM Worksheet table thead */
        thead?: HTMLElement;
        /** DOM Worksheet table body */
        tbody?: HTMLElement;
        /** DOM array of rows */
        rows?: Array<HTMLElement>;
        /** DOM array of results */
        results?: Array<Number>;
        /** Pagination DOM containr */
        pagination?: Object;
        /** Current page number */
        pageNumber?: Number;
        /** Hold the header container */
        headerContainer?: HTMLElement;
        /** Array with the header DOM elements */
        headers?: Array<HTMLElement>;
        /** Array with the cell DOM elements */
        records?: Array<HTMLElement>;
        /** Selected cells */
        selectedCell?: [];
        /** Internal selected cell */
        cursor?: Object;
        /** Edition controllers */
        edition?: [];
        /** Internal record id sequence */
        sequence?: Number;
        /** Get the worksheet settings */
        getConfig?: () => Boolean;
        /** Change the worksheet settings */
        setConfig?: (config: Worksheet) => void;
        /** Load the initial worksheet settings */
        loadConfig?: (config: Worksheet) => void;
        /** Persistence helper method. The callback is executed with a JSON from the server */
        save?: (url: String, data: Object, token: String, callback: (result: Object) => void) => void;
        /** Refresh the whole data or from a single row  */
        refresh?: (y: Number | undefined) => void;
        /** Get the editor type for one column or cell */
        getType?: (x: Number, y: Number) => void;
        /** Set the editor type for one column or cell */
        setType?: (x: Number, y: Number) => void;
        /** Get the properties for one column or cell */
        getProperties?: (x: Number, y: Number) => void;
        /** Set the properties for one column */
        setProperties?: (column: Number, settings: Object) => void;
        /** Update nested header */
        updateNestedHeader?: (x: Number, y: Number, settings: Object) => void;
        /** Get the nested header columns */
        getNestedColumns?: (x: Number, y: Number) => [];
        /** Set plugins for the spreadsheet */
        setPlugins?: (plugins: []) => void;
        /** Get the processed data cell shown to the user by the cell name */
        getLabel?: (cellName: String) => Object;
        /** Get the processed data cell shown to the user by its coordinates */
        getLabelFromCoords?: (x: Number, y: Number) => [];
        /** Get value by the cellname or object. The value can be the raw or processed value. */
        getValue?: (cell: String, processed: Boolean) => String;
        /** Get value by the coordinates. The value can be the raw or processed value. */
        getValueFromCoords?: (x: Number, y: Number, processed: Boolean) => void;
        /**
         * Set a cell value
         *
         * @param {mixed} cell destination cell
         * @param {string} value value
         * @param {string} force value over readonly cells
         * @return void
         */
        setValue?: (cell: String, value: String, forceOverwrite: Boolean) => void;
        /**
         * Set a cell value
         *
         * @param {number} x
         * @param {number} y
         * @param {string} value value
         * @param {string} force value over readonly cells
         * @return void
         */
        setValueFromCoords?: (x: Number, y: Number, value: String, force: Boolean) => void;
        /** Get the width of one column by its position */
        getWidth?: (col: Number) => void;
        /** Set the width of one column by its position */
        setWidth?: (col: Number, width: Number) => void;
        /** Get the height of one row by its position */
        getHeight?: (row: Number) => void;
        /** Set the height of one row by its position */
        setHeight?: (row: Number, width: Number) => void;
        /** Set the footers */
        setFooter?: (data: []) => void;
        /** Destroy the footers */
        resetFooter?: () => void;
        /** Get the header title */
        getHeader?: (columnNumber: Number) => String;
        /** Set the header title */
        setHeader?: (columnNumber: Number, title: String) => void;
        /** Get all header elements */
        getHeaders?: () => [];
        /** Get one or all meta information for one cell. */
        getMeta?: (cellName: String, property: String) => Object;
        /** Get one or various meta information for one cell. */
        setMeta?: (cellName: String, property: String, value: String) => void;
        /** Get the style from one cell. Ex. getStyle('A1') */
        getStyle?: (cell: String) => Object;
        /** Get the style from one cell. Ex. resetStyle('A1') */
        resetStyle?: (cell: String) => void;
        /** Set the style for one cell. Ex. setStyle('A1', 'background-color', 'red') */
        setStyle?: (cellName: String, property: String, value: String, forceOverwrite: Boolean) => void;
        /** Get the comments from one cell */
        getComments?: (cellName: String) => String;
        /** Set the comments for one cell */
        setComments?: (cellName: String, comments: String) => void;
        /** Sort one column by its position. ASC (0) or DESC (1) */
        orderBy?: (column: Number, direction: Boolean) => void;
        /** Update the selection based on two DOM cell selements */
        updateSelection?: (el1: Number, el2: Number, origin: Boolean) => void;
        /** Update the selection based on coordinates */
        updateSelectionFromCoords?: (x1: Number, y1: Number, x2: Number, y2: Number, origin: Boolean) => void;
        /** Get all selected cells */
        getSelected?: (columnNameOnly: Boolean) => [];
        /** Get the selected rows */
        getSelectedRows?: () => [];
        /** Get the selected columns */
        getSelectedColumns?: () => [];
        /** Get the highlighted coordinates **/
        getHighlighted?: () => [];
        /** The worksheet is editable */
        isEditable?: () => Boolean;
        /** Check if cell is attached to the DOM */
        isAttached?: (x: number, y: number) => Boolean;
        /** Check if cell is readonly or not */
        isReadOnly?: (cell: Object) => Boolean;
        /** Cell is selected */
        isSelected?: (x: Number, y: Number) => Boolean;
        /** Set or reset the cell as readonly */
        setReadOnly?: (cell: Object, state: Boolean) => void;
        /** Show row */
        showRow?: (row: Number) => void;
        /** Hide row */
        hideRow?: (row: Number) => void;
        /** Show column */
        showColumn?: (column: Number) => void;
        /** Hide column */
        hideColumn?: (column: Number) => void;
        /** Show index column */
        showIndex?: () => void;
        /** Hide index column */
        hideIndex?: () => void;
        /** Change page when using pagination */
        page?: (pageNumber: Number) => void;
        /** Go to the row number **/
        goto?: (rowNumber: Number) => void;
        /** Search for something */
        search?: (str: String) => void;
        /** Search HTML input */
        searchInput?: HTMLElement;
        /** Search HTML container */
        searchContainer?: HTMLElement;
        /** Reset the search */
        resetSearch?: () => void;
        /** Open the filters */
        openFilter?: (column: Number) => void;
        /** Close the filters */
        resetFilters?: () => void;
        /** Close the filters */
        closeFilters?: () => void;
        /** Worksheet configuration */
        options?: Worksheet;
        /** Internal method: update cells in a batch */
        updateCells?: (o: Object) => void;
        /**
         * Internal method: Internal method: Set a cell value
         *
         * @param {number} x
         * @param {number} y
         * @param {string} value value
         * @param {string} force value over readonly cells
         * @return void
         */
        updateCell?: (x: Number, y: Number, value: String, force: Boolean) => void;
        /** Set viewport width and height */
        setViewport?: (width: Number, height: Number) => void;
    }
}

export = jspreadsheet;
