export namespace pv {
    export interface gridItem {
        // line: returns d3.line() , don't care about specifics
        coordX: number,
        coordY: number,
        pixelX: number,
        pixelY: number,
        fill: string,
        border: string
    }
    // export interface coord {
    //     x: number,
    //     y: number,
    //     rectColor?: string
    // }

    export class gridParams {

        // number of grid squares across
        gridLimit = 4;
        // pixels per grid square
        gridScale = 50;

        topBuffer = 1;
        leftBuffer = 10;
        constructor() { }
    }
}

