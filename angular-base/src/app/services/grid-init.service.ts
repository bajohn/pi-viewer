import { Injectable } from '@angular/core';
import { pv } from '../classes';
import * as d3 from "d3"
@Injectable({
  providedIn: 'root'
})
export class GridInitService {

  constructor() { }
  public gridParams = new pv.gridParams;
  // generate all grid base coordinates
  public generateCoord() {
    const retGridState: Array<pv.gridItem> = []
    for (let i = 0; i <= this.gridParams.gridLimit; i++) {
      retGridState.push(this._gridElInitializer(0, i));
      retGridState.push(this._gridElInitializer(i, 0));
    }
    return retGridState;
  }

  // for a given base coordinate (like 0,1 or 5,0), return a default gridItem
  // with needed pts.
  private _gridElInitializer(gridBaseX: number, gridBaseY: number): pv.gridItem {
    return {
      gridBaseX: gridBaseX,
      gridBaseY: gridBaseY,
      pts: this._generateGridPts(gridBaseX, gridBaseY),
      _line: this._generateLine
    }

  }
  // Returns d3 line generating function.
  // This will probably remain constant once initialized.
  private _generateLine = d3.line()
    .x(function (d) { return d.x })
    .y(function (d) { return d.y })

  // for a given base coordinate (like 0,1 or 5,0), return all points needed
  // to render the default grid.
  private _generateGridPts(gridBaseX: number, gridBaseY: number): Array<pv.coord> {
    const ret: Array<pv.coord> = [];
    const gridScale = this.gridParams.gridScale;
    const topBuffer = this.gridParams.topBuffer;
    const leftBuffer = this.gridParams.leftBuffer;
    const gridLimit = this.gridParams.gridLimit;
    for (let i = 0; i <= gridLimit; i++) {
      if (gridBaseX === 0) {
        if (gridBaseY === 0) {
          // these specialized borders have a different point density than
          // the others. may not matter
          if (i < gridLimit / 2) {
            // left border
            ret.push({
              x: leftBuffer,
              y: gridScale * (gridLimit - i) + topBuffer,
            });
          }
          else {
            //top border
            ret.push({
              x: gridScale * (2 * i - gridLimit) + leftBuffer,
              y: topBuffer
            });
          }
        }
        else {
          // horizontal
          ret.push({
            x: gridScale * (gridBaseX + i) + leftBuffer,
            y: gridScale * gridBaseY + topBuffer,
          });
        }

      }
      else {
        // vertical line
        ret.push({
          x: gridScale * gridBaseX + leftBuffer,
          y: gridScale * (gridBaseY + i) + topBuffer,
        });
      }
    }

    return ret;
  }
}
