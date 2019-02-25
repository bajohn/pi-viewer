export namespace pv {
    export interface gridItem {
        // line: returns d3.line() , don't care about specifics
        _line: (gridIn: Array<pv.coord>) => { any },
        pts: Array<pv.coord>,
        gridBaseX: number,
        gridBaseY: number
    }
    export interface coord {
        x: number,
        y: number,
        rectColor?: string
    }

    export class gridParams {

        // number of grid squares across
        gridLimit = 10;
        // pixels per grid square
        gridScale = 5;

        topBuffer = 1;
        leftBuffer = 10;
        constructor() { }
    }
}

