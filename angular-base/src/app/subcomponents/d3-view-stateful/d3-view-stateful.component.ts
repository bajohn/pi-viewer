import { Component, OnInit } from '@angular/core';
import { pv } from '../../classes'
import * as d3 from "d3"

@Component({
  selector: 'app-d3-view-stateful',
  templateUrl: './d3-view-stateful.component.html',
  styleUrls: ['./d3-view-stateful.component.css']
})
export class D3ViewStatefulComponent implements OnInit {

  constructor() { }
  _self = this;
  curGridState: Array<pv.gridItem> = []
  gridParams = new pv.gridParams();

  ngOnInit() {
    this.curGridState = this._generateCoord();
    const chartId = 'd3-view';
    const selection = this._selectSvgEl(chartId);

    this._initialRender(selection);

    // setInterval(() => {
    //   this._update(selection);
    // }, 10);
  }
  private _selectSvgEl(idIn) {
    return d3.select(`#${idIn}`)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
  }



  // Default rendering
  private _initialRender(selection) {

    //this.curGridState = this.curGridState.concat(this.curGridState);
    selection
      .selectAll('path')
      .data(this.curGridState).enter().append('path')

      .attr('d', (d) => { return d._line(d.pts); })
      .attr("stroke", d => { return 'rgba(112, 112, 112, 1)' })
      .attr("stroke-width", .5)
      .attr("fill", "none");

  }

  private _update(selection) {
    selection
      .selectAll('path')
      .each(el => {
        el.pts.map(el => {
          el.x = 100 + 10 * Math.sin((new Date).getTime() / 1000);
        })
      })
      .attr('d', (d) => { return d._line(d.pts); });
  }

  // generate all grid base coordinates
  private _generateCoord() {
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
              x: gridScale * (2*i - gridLimit) + leftBuffer,
              y: topBuffer
            });
          }

          console.log(ret);
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
