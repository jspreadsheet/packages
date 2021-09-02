/**
 * Official Type definitions for Jspreadsheet Pro
 * https://jspreadsheet.com
 * Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 */

declare function jspreadsheet(element?: HTMLElement, options?: jspreadsheet.options) : jspreadsheet.instance;

declare namespace jspreadsheet {
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
        oninsert: Function;
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
        type?: Function | 'autocomplete' | 'calendar' | 'checkbox' | 'color' | 'dropdown' | 'hidden' | 'html' | 'image' | 'numeric' | 'radio' | 'text';
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
    }

    interface Row {
        /** Row height in pixels. */
        height?: number;
        /** Row identification. */
        title?: string;
    }

    interface Dictionary {
        /** No records found */
        noRecordsFound?: string;
        /** Showing page {0} of {1} entries */
        showingPage?: string;
        /** Show  */
        show?: string;
        /** Search */
        search?: string;
        /** entries */
        entries?: string;
        /** Column name */
        columnName?: string;
        /** Change column type */
        changeColumnType?: string;
        /** Insert a new column before */
        insertANewColumnBefore?: string;
        /** Insert a new column after */
        insertANewColumnAfter?: string;
        /** Delete selected columns */
        deleteSelectedColumns?: string;
        /** Rename this column */
        renameThisColumn?: string;
        /** Order ascending */
        orderAscending?: string;
        /** Order descending */
        orderDescending?: string;
        /** Insert a new row before */
        insertANewRowBefore?: string;
        /** Insert a new row after */
        insertANewRowAfter?: string;
        /** Delete selected rows */
        deleteSelectedRows?: string;
        /** Edit comments */
        editComments?: string;
        /** Add comments */
        addComments?: string;
        /** Comments */
        comments?: string;
        /** Clear comments */
        clearComments?: string;
        /** Copy */
        copy?: string;
        /** Paste */
        paste?: string;
        /** Save as */
        saveAs?: string;
        /**A bout */
        about?: string;
        /** Are you sure to delete the selected rows? */
        areYouSureToDeleteTheSelectedRows?: string;
        /** Are you sure to delete the selected columns? */
        areYouSureToDeleteTheSelectedColumns?: string;
        /** This action will destroy any existing merged cells. Are you sure? */
        thisActionWillDestroyAnyExistingMergedCellsAreYouSure?: string;
        /** This action will clear your search results. Are you sure? */
        thisActionWillClearYourSearchResultsAreYouSure?: string;
        /** There is a conflict with another merged cell */
        thereIsAConflictWithAnotherMergedCell?: string;
        /** Invalid merged properties */
        invalidMergeProperties?: string;
        /** Cell already merged */
        cellAlreadyMerged?: string;
        /** No cells selected */
        noCellsSelected?: string;
        /** Rename this worksheet */
        renameThisWorksheet?: string;
        /** Delete this worksheet */
        deleteThisWorksheet?: string;
        /** Are you sure to delete this worksheet? */
        areYouSureDeleteThisWorksheet?: string;
        /** It was not possible to rename worksheet due conflict name */
        itWasNotPossibleToRenameWorksheetDueConflictName?: string;
        /** Cut */
        cut?: string;
        /** Hide */
        hide?: string;
        /** Unhide */
        unhide?: string;
        /** Select All */
        selectAll?: string;
        /** Blanks */
        blanks?: string;
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

    interface options {
        /** Your application name */
        application? : string;
        /** Render a remote spreadsheet from Jspreadsheet Cloud, which is a serveless hosting service. That can be generate at https://jspreadsheet.com/cloud */
        cloud? : string;
        /** DOM element for binding the javascript events. This property is normally used when JSS is running as a web component. */
        root? : HTMLElement;
        /** Allow internal sequence for new rows */
        sequence? : boolean;
        /** Persitence URL or true when the URL is the same of the URL of the data source */
        persistence? : string | boolean;
        /** Load the data from an external server URL */
        url? : string;
        /** Load the data into a new spreadsheet from an array of rows or objects */
        data? : Array<any> ;
        /** Data in json format initially loaded to the table */
        json? : Array<Record<string, any>>;
        /** Array with the rows properties definitions such as title, height. */
        rows? : Row[];
        /** The column properties define the behavior of a column and the associated editor */
        columns? : Array<Column>;
        /** Define the properties of a cell. This property overwrite the column definitions */
        cells: Record<string, Column>;
        /** Nested headers definition */
        nestedHeaders: Array<Nested>;
        /** Footers */
        footers?: Array<any>
        /** Default column width. Default: 50px */
        defaultColWidth?: number | string;
        /** Default alignment for a new column: [center, left, right] */
        defaultColAlign?: 'center' | 'left' | 'right' | 'justify';
        /** Minimum number of spare rows. Default: 0 */
        minSpareRows?: number;
        /** Minimum number of spare cols. Default: 0 */
        minSpareCols?: number;
        /** Minimum table dimensions: [numberOfColumns, numberOfRows] */
        minDimensions?: [number, number];
        /** Allow data export */
        allowExport?: boolean;
        /** Include the table headers in the first row of the data */
        includeHeadersOnDownload?: boolean;
        /** Force update on paste for read-only cells */
        forceUpdateOnPaste?: boolean;
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
        /** Global cell wrapping. Default: false */
        wordWrap?: boolean;
        /** CSV data source URL */
        csv?: string;
        /** CSV default filename for the jspreadsheet exports. Default: 'jspreadsheet' */
        csvFileName?: string;
        /** Consider first line as header. Default: true */
        csvHeaders?: boolean;
        /** Delimiter to consider when dealing with the CSV data. Default: ',' */
        csvDelimiter?: boolean;
        /** Corner selection and corner data cloning. Default: true */
        selectionCopy?: boolean,
        /** Merged cells. Default: null */
        mergeCells?: Record<string, []>,
        /** Create toolbar */
        toolbar?: boolean | Toolbar;
        /** Allow search on the spreadsheet */
        search?: boolean;
        /** Activate pagination and defines the number of records per page. Default: false */
        pagination?: number;
        /** Dropdown for the user to change the number of records per page. Example: [10,25,50,100]. Default: false */
        paginationOptions?: boolean | Array<number> ;
        /** Render jspreadsheet spreadsheet on full screen mode. Default: false */
        fullscreen?: boolean;
        /** Enable lazy loading. Default: false. */
        lazyLoading?: boolean;
        /** Number of records per refresh. Default: 50 */
        lazyNumber?: number;
        /** Enable loading spin when loading data. Default: false. */
        loadingSpin?: boolean;
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
        /** Execute formulas. Default: true */
        parseFormulas?: boolean;
        /** Auto increment cell data when using the corner copy, including formulas, numbers and dates. Default: true */
        autoIncrement?: boolean;
        /** Try to cast numbers from cell values when executing formulas. Default: true */
        autoCasting?: boolean;
        /** Enable cache */
        cache?: boolean,
        /** Make sure the formulas are capital letter. Default: true */
        secureFormulas: boolean;
        /** Enable formula debug. Default: false **/
        debugFormulas?: boolean,
        /** Remove any HTML from the data and headers. Default: true */
        stripHTML: boolean;
        /** Freeze columns. Default: 0 */
        freezeColumns?: number;
        /** Initial sorting [colNumber, direction]. Default: null */
        orderBy?: [number, boolean];
        /** Allow tabs. Default: false */
        tabs?: boolean;
        /** Worksheet Unique Id. **/
        worksheetId?: string;
        /** Worksheet Name. **/
        worksheetName?: string;
        /** Allow the user to delete worksheets. Default: true **/
        allowDeleteWorksheet?: boolean;
        /** Allow the user to rename worksheets. Default: true **/
        allowRenameWorksheet?: boolean;
        /** Allow the user to drag and drop the worksheets. Default: true **/
        allowMoveWorksheet?: boolean;
        /** When is true copy and export returns formula results, if false will bring formulas. Default: true */
        copyCompatibility? : boolean;
        /** This method is called when the data in the spreadsheet is ready. */
        onload?: (worksheet: Object, instance: Object) => void;
        /** Spreadsheet is clicked **/
        onclick?: (worksheet: Object, section: String, x: Number, y: Number) => void;
        /** When undo is applied */
        onundo?: (worksheet: Object, historyRecord: Object) => void;
        /** When redo is applied */
        onredo?: (worksheet: Object, historyRecord: Object) => void;
        /** Before any data is sent to the backend. Can be used to overwrite the data or to cancel the action when return false. */
        onbeforesave?: (worksheet: Object, instance: Object, data: []) => Boolean | [];
        /** After something is saved */
        onsave?: (worksheet: Object, instance: Object, data: []) => void;
        /** Before a column value is changed. NOTE: It is possible to overwrite the original value, by return a new value on this method. */
        onbeforechange?: (worksheet: Object, cell: Element, x: Number, y: Number, value: String) => String;
        /** After a column value is changed. */
        onchange?: (worksheet: Object, cell: HTMLElement, x: Number, y: Number, newValue: String, oldValue: String) => void;
        /** Event: onafterchanges(jspreadsheetHTMLElement, jspreadsheetInstance) */
        onafterchanges?: (element: HTMLElement, records: Array<any>) => void;
        /** When a copy is performed in the spreadsheet. Any string returned will overwrite the user data or return null to progress with the default behavior. */
        oncopy?: (worksheet: Object, selectedCells: [], data: String) => String;
        /** Before the paste action is performed. Can return parsed or filtered data, can cancel the action when return false. */
        onbeforepaste?: (worksheet: Object, data: String, x: Number, y: Number) => [];
        /** After a paste action is performed in the spreadsheet. */
        onpaste?: (worksheet: Object, data: []) => void;
        /** Before a new row is inserted. You can cancel the insert event by returning false. */
        onbeforeinsertrow?: (worksheet: Object, rowNumber: Number, numOfRows: Number, insertBefore: Boolean) => Boolean | undefined;
        /** After a new row is inserted. */
        oninsertrow?: (worksheet: Object, rowNumber: Number, numOfRows: Number, insertBefore: Boolean) => void;
        /** Before a row is deleted. You can cancel the delete event by returning false. */
        onbeforedeleterow?: (worksheet: Object, rowNumber: Number, numOfRows: Number) => Boolean | undefined;
        /** After a row is excluded. */
        ondeleterow?: (worksheet: Object, rowNumber: Number, numOfRows: Number, rowHTMLElements: [], rowData: [], cellAttributes: []) => void;
        /** Before a new column is inserted. You can cancel the insert event by returning false. */
        onbeforeinsertcolumn?: (worksheet: Object, columnNumber: Number, numOfColumns: Number, insertBefore: Boolean) => Boolean | undefined;
        /** After a new column is inserted. */
        oninsertcolumn?: (worksheet: Object, columnNumber: Number, numOfColumns: Number, historyRecords: [], insertBefore: Boolean) => void;
        /** Before a column is excluded. You can cancel the insert event by returning false. */
        onbeforedeletecolumn?: (worksheet: Object, columnNumber: Number, numOfColumns: Number) => Boolean | undefined;
        /** After a column is excluded. */
        ondeletecolumn?: (worksheet: Object, columnNumber: Number, numOfColumns: Number, affectedHTMLElements: [], historyProperties: [], cellAttributes: []) => void;
        /** After a row is moved to a new position. */
        onmoverow?: (worksheet: Object, origin: Number, destination: Number) => void;
        /** After a column is moved to a new position. */
        onmovecolumn?: (worksheet: Object, origin: Number, destination: Number) =>  void;
        /** After a height change for one or more rows. */
        onresizerow?: (worksheet: Object, row: Number | [], height: Number | [], oldHeight: Number | []) => void;
        /** After a column width change for one or more columns. */
        onresizecolumn?: (worksheet: Object, column: Number | [], width: Number | [], oldWidth: Number | []) => void;
        /** When the selection is changed. */
        onselection?: (worksheet: Object, px: Number, py: Number, ux: Number, uy: Number, origin: Number) => void;
        /** Before a new comment is added or updated. Return false to cancel the event. */
        onbeforecomments?: (worksheet: Object, cells: Object) => Boolean | undefined;
        /** After a new comment is added or updated. */
        oncomments?: (worksheet: Object, cells: Object) => void;
        /** It runs before sorting a column. It should return an array with a custom sorting or false to cancel the user action. */
        onbeforesort?: (worksheet: Object, column: Number, direction: Number, newOrderValues: []) => Boolean | [] | undefined;
        /** When a column is sorted. */
        onsort?: (worksheet: Object, column: Number, direction: Number, newOrderValues: []) => void;
        /** When the spreadsheed gets the focus. */
        onfocus?: (worksheet: Object) => void;
        /** When the spreadsheet loses the focus. */
        onblur?: (worksheet: Object) => void;
        /** When merge cells is executed. */
        onmerge?: (worksheet: Object, cellName: String, colspan: Number, rowspan: Number) => void;
        /** When the header title is changed. */
        onchangeheader?: (worksheet: Object, column: Number, newValue: String, oldValue: String) => void;
        /** When the footers are created or updated. */
        onchangefooter?: (worksheet: Object, column: Number, newValue: String, oldValue: String) => void;
        /** When the value in a cell footer is changed. */
        onchangefootervalue?: (worksheet: Object, x: Number, y: Number, value: String) => void;
        /** When an editor is created. */
        oncreateeditor?: (worksheet: Object, cell: HTMLElement, x: Number, y: Number, element: HTMLElement, options: Object) => void;
        /** When the editor is opened. **/
        oneditionstart?: (worksheet: Object, cell: HTMLElement, x: Number, y: Number) => void;
        /** When the editor is closed. **/
        oneditionend?: (worksheet: Object, cell: HTMLElement, x: Number, y: Number, newValue: [], save: Boolean) => void;
        /** When the style of a cell is changed. */
        onchangestyle?: (worksheet: Object, mixed: [], key: String, value: String) => void;
        /** When a cell meta information is added or updated. */
        onchangemeta?: (worksheet: Object, mixed: [], key: String, value: String) => void;
        /** Before the page is changed. Can cancel the action when return is false. */
        onbeforechangepage?: (worksheet: Object, pageNumber: Number, oldPage: Number, quantityPerPage: Number) => Boolean | undefined;
        /** When pagination is enabled and the user changes the page. */
        onchangepage?: (worksheet: Object, pageNumber: Number, oldPageNumber: Number) => void;
        /** Add or change the options of a new worksheet. */
        onbeforecreateworksheet?: (worksheet: options, options: Object) => Object;
        /** When the user creates a new worksheet. */
        oncreateworksheet?: (worksheet: Object, options: Object) => void;
        /** When the user renames a worksheet. */
        onrenameworksheet?: (worksheet: Object, worksheetNumber: Number) => void;
        /** >When the user deletes a worksheet. */
        ondeleteworksheet?: (worksheet: Object, worksheetNumber: Number) => void;
        /** When the user updates the worksheet tab position. */
        onmoveworksheet?: (worksheet: Object, from: Number, to: Number) => void;
        /** When the user opens a worksheet. */
        onopenworksheet?: (worksheet: Object, index: Number) => void;
        /** When there is a row id update */
        onchangerowid?: (worksheet: Object, instance: Object, rows: []) => void;
        /** Action to be executed before searching. The accepted method return would be: null to continue with the default behavior, false to cancel the user action or an array with the row numbers to overwrite the default result. */
        onbeforesearch?: (worksheet: Object, query: String, results: []) => [];
        /** After the search is applied to the rows. */
        onsearch?: (worksheet: Object, query: String, results: []) => void;
        /** Action to be executed before filtering rows. It can cancel the action by returning false. */
        onbeforefilter?: (worksheet: Object, filters: [], data: []) => void;
        /** After the filter has been applied to the rows. */
        onfilter?: (worksheet: Object, filters: [], data: []) => void;
        /** Return false to cancel the contextMenu event, or return custom elements for the contextmenu. */
        contextmenu?: (worksheet: Object, x: Number, y: Number, e: Event, section: String, section_argument1: String | Number, section_argument2: String | Number) => [];
        /** Run every single table update action. Can bring performance issues if perform too much changes. */
        updateTable?: (worksheet: Object, cell: Object, x: Number, y: Number, value: String) => void;
        /** Detach the HTML table when calling updateTable */
        detachForUpdates?: Boolean,
        /** The first row is the header titles when parsing a HTML table */
        parseTableFirstRowAsHeader?: Boolean,
        /** Try to identify a column type when parsing a HTML table */
        parseTableAutoCellType?: Boolean,
        /** Enable the column filters */
        filters?: Boolean;
        /** Load plugins to the spreadsheet. */
        plugins?: Record<string, Plugin>;
        /** Translations */
        text?: Dictionary,
        /** About information */
        about?: string | Function,
        /** License string */
        license?: string,
    }

    interface instance {
        /** DOM Element */
        el?: HTMLElement;
        /** DOM Worksheet */
        worksheet?: HTMLElement;
        /** DOM Corner square */
        corner?: HTMLElement;
        /** DOM Contextmenu */
        contextMenu?: HTMLElement;
        /** DOM Textarea helper */
        textarea?: HTMLElement;
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
        /** DOM toolbar */
        toolbar?: HTMLElement;
        pagination?: Object;
        pageNumber?: Number;
        horizontalView?: Object;
        headerContainer?: Array<HTMLElement>;
        colgroupContainer?: Array<HTMLElement>;
        progress?: HTMLElement;
        plugins?: Record<number, Plugin>;
        helper?: HTMLElement;

        // Containers
        /** Array with the header DOM elements */
        headers?: [];
        /** Array with the cell DOM elements */
        records?: [];
        /** Array with the borders information */
        borders?: [];
        /** Array with the history information */
        history?: [];
        /** Formula chain */
        formula?: [];
        /** Array with the column width controllers */
        colgroup?: [];
        /** Selected cells */
        selectedCell?: [];

        // Internal controllers

        /** Internal selected cell */
        cursor?: Object;
        /** Internal history index position */
        historyIndex?: Boolean;
        /** History group information */
        historyGroup?: [];
        /** Ignore cloud events */
        ignoreCloud?: Boolean;
        /** Ignore events */
        ignoreEvents?: Boolean;
        /** Ignore history events */
        ignoreHistory?: Boolean;
        /** Ignore persistence events */
        ignorePersistence?: Boolean;
        /** Edition controllers */
        edition?: [];
        /** Internal record id sequence */
        sequence?: Number;

        // Available methods

        /** The worksheet is editable */
        isEditable?: () => Boolean;
        /** Get the worksheet settings */
        getConfig?: () => Boolean;
        /** Change the worksheet settings */
        setConfig?: (config: options) => void;
        /** Load the initial worksheet settings */
        loadConfig?: (config: options) => void;
        /** Persistence helper method */
        save?: (url: String, data: Object, token: String) => void;
        /** Toggle the fullscreen mode */
        fullscreen?: (state: Boolean) => void;
        /** Refresh the data */
        refresh?: () => void;
        /** Reset the table data */
        setData?: (data: []) => void;
        /**
         * Get the worksheet data
         *
         * @param {boolean} only the selected cells
         * @param {boolean} get the raw or processed data
         * @return {array} array of data
         */
        getData?: (highlighted: Boolean, processed: Boolean) => [];
        /**
         * Get the worksheet data
         *
         * @param {boolean} only the selected cells
         * @param {boolean} get the raw or processed data
         * @return {array} array of data
         */
        getJson?: (highlighted: Boolean, processed: Boolean) => Object;
        /**
         * Get json data by row number
         *
         * @param {integer} row number
         * @return object
         */
        getJsonRow?: (rowNumber: Number) => Object;
        /** Get the primaryKey column when applicable. */
        getPrimaryKey?: () => Number;
        /** Get the column position by its name */
        getColumnIdByName?: (name: String) => Number;
        /** Get the column object by its position */
        getColumn?: (position: Number) => Object;
        /** Set the column properties by its position */
        setColumn?: (position: Number, settings: Object) => void;
        /** Get the next available number in the sequence */
        getNextSequence?: () => Number;
        /** Get the information of a row by its id */
        getById?: (row: Number) => Object;
        /** Get the row id from its position */
        getRowId?: (row: Number) => Number;
        /** Set the row id from its position */
        setRowId?: (row: Number, newId: Number) => void;
        /** Get the data from one row */
        getRowData?: (row: Number) => [];
        /** Set the data from one row */
        setRowData?: (row: Number, data: []) => void;
        /** Get the column data from its number */
        getColumnData?: (col: Number, processed: Boolean) => [];
        /** Set the column data from its number */
        setColumnData?: (col: Number, data: []) => void;
        /** Get the settings for one column. Row its optional when need to get the information from one specific cell. */
        getColumnOptions?: (x: Number, y: Number) => void;
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
        /** Show the toolbar for the worksheet */
        showToolbar?: () => void;
        /** Hide the toolbar for the worksheet */
        hideToolbar?: () => void;
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
        /** Start the edition for one cell */
        openEditor?: (cell: HTMLElement, empty: Boolean, mouseEvent: Object) => void;
        /** Close the editon for one cell */
        closeEditor?: (cell: HTMLElement, save: Boolean) => void;
        /** Get the cell element from the cellname */
        getCell?: (cellName: String) => Object;
        /** Get the cell element from its coordinates */
        getCellFromCoords?: (x: Number, y: Number) => [];
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
        /** Set borders with a border name and color. */
        setBorder?: (x1: Number, y1: Number, x2: Number, y2: Number, border: String, color: String) => void;
        /** Reset the borders by name border name */
        resetBorders?: (border: String, resetPosition: Boolean) => void;
        /** Refresh the borders by the border name */
        refreshBorders?: (border: String) => void;
        /** Reset the main selection */
        resetSelection?: () => void;
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
        /** Create a new worksheet from the given settings */
        createWorksheet?: (options: options) => void;
        /** Delete an existing worksheet by its position */
        deleteWorksheet?: (position: Number) => void;
        /** Rename an existing worksheet by its position */
        renameWorksheet?: (position: Number, title: String) => void;
        /** Move the position of a worksheet tab */
        moveWorksheet?: (from: Number, to: Number, updateDom: Boolean) => void;
        /** Open a worksheet */
        openWorksheet?: (position: Number) => void;
        /** Get the worksheet by its id */
        getWorksheet?: (id: String) => Number;
        /** Get the active worksheet when applicable */
        getWorksheetActive?: () => instance;
        /** Get the worksheet instance by its position */
        getWorksheetInstance?: (position: Number) => instance;
        /** Get the worksheet name */
        getWorksheetName?: () => String;
        /** Get the header title */
        getHeader?: (columnNumber: Number) => String;
        /** Set the header title */
        setHeader?: (columnNumber: Number, title: String) => void;
        /** Get all header elements */
        getHeaders?: () => [];
        /** Get attributes from one cell when applicable */
        getCells?: (cellName: String) => Column;
        /** Set attributes for one cell */
        setCells?: (cellName: String, settings: Column) => void;
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
        /** Update the selection based on two DOM cell selements */
        updateSelection?: (el1: Number, el2: Number, origin: Boolean) => void;
        /** Update the selection based on coordinates */
        updateSelectionFromCoords?: (x1: Number, y1: Number, x2: Number, y2: Number, origin: Boolean) => void;
        /** Cell is selected */
        isSelected?: (x: Number, y: Number) => Boolean;
        /** Get all selected cells */
        getSelected?: (columnNameOnly: Boolean) => [];
        /** Get the selected rows */
        getSelectedRows?: () => [];
        /** Get the selected columns */
        getSelectedColumns?: () => [];
        /** Get the highlighted coordinates **/
        getHighlighted?: () => [];
        /** Check if cell is readonly or not */
        isReadOnly?: (cell: Object) => Boolean;
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
        /** Download CSV */
        download?: (includeHeaders: Boolean, processed: Boolean) => void;
        /** Cut */
        cut?: () => void;
        /** Copy */
        copy?: () => void;
        /** Paste */
        paste?: (x: Number, y: Number, data: String) => void;
        /** Undo */
        undo?: () => void;
        /** Redo */
        redo?: () => void;
        /** parseCSV **/
        parseCSV?: (data: String) => [];
        /** Search */
        search?: (str: String) => void;
        /** Reset the search */
        resetSearch?: () => void;
        /** Open the filters */
        openFilter?: (column: Number) => void;
        /** Close the filters */
        resetFilters?: () => void;
        /** Close the filters */
        closeFilters?: () => void;
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

        // Internal methods

        /** Internal method: Prepare the data to be sent to the server */
        prepare?: (data, colNumber) => void
        /** Internal method: dispatch method */
        dispatchMethod?: () => void;
        /** Internal method: event dispatch controllers */
        dispatch?: (event: String) => void;
        /** Internal method: toggle the progress bar */
        setProgress?: (v: Boolean) => void;
        /** Internal method: prepare the table */
        prepareTable?: () => void;
        /** Internal method: parse the data */
        parseData?: (data: []) => void;
        /** Internal method: create a new row */
        createRow?: (row: Number, info: Object) => void;
        /** Internal method: append a new row */
        appendRow?: (row: Number) => void;
        /** Internal method: render row */
        renderRow?: (row: Number) => void;
        /** Internal method: create a new cell */
        createCell?: (x: Number, y: Number, value: String) => void;
        /** Internal method: applyCellValues */
        applyCellValues?: (x: Number, y: Number, value: String) => void;
        /** Internal method: applyCellValues */
        applyCellProperies?: (x: Number, y: Number, value: String) => void;
        /** Internal method: create header helper */
        createCellHeader?: (colNumber: Number) => void;
        /** Internal method: Create nested header helpers */
        createNestedHeader?: (nestedInformation: Object, j: Number) => void;
        /** Internal method: Get the editor for one cell */
        getEditor?: (x: Number, y: Number) => Object;
        /** Internal method: Apply value over checkboxes and radio cell types */
        setCheckRadioValue?: () => void;
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
        /** Internal method: Execute a formula */
        executeFormula?: (expression: String, x: Number, y: Number, caching: Boolean) => void;
        /** Internal method: History handler **/
        setHistory?: (changes: Object) => void;
    }
}

export = jspreadsheet;