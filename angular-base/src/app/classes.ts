export namespace pv {
    export interface gridItem {
        x: number,
        y: number,
        gridX: number,
        gridY: number,
        color: string
    }

    export interface coord {
        x: number,
        y: number
    }

    export class gridParams {

        // number of grid squares across
        gridLimit = 20;
        // pixels per grid square
        gridScale = 20;

        topBuffer = 1;
        leftBuffer = 10;
        constructor() { }
    }
}

