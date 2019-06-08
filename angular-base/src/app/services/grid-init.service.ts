import { Injectable } from '@angular/core';
import { pv } from '../classes';
import * as d3 from "d3"
@Injectable({
  providedIn: 'root'
})
export class GridInitService {

  constructor() {
    this.grid = this.initializeGrid();
  }
  public gridParams = new pv.gridParams;
  public grid: Array<pv.gridItem> = [];
  initializeGrid() {
    const ret: Array<pv.gridItem> = [];
    for (let x = 0; x < this.gridParams.gridLimit; x++) {
      for (let y = 0; y < this.gridParams.gridLimit; y++) {
        ret.push({
          coordX: x,
          coordY: y,
          pixelX: x * this.gridParams.gridScale,
          pixelY: y * this.gridParams.gridScale,
          fill: 'red',
          border: 'black'
        })
      }
    }
    return ret;
  }
}
