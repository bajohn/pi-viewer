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
  curGridState: Array<{
    // line: returns d3.line() , don't care about specifics
    _line: (gridIn: Array<pv.gridItem>) => { any },
    pts: Array<pv.gridItem>,
    gridBaseX: number,
    gridBaseY: number
  }> = []

  ngOnInit() {
    this.curGridState = [
      //this._gridElInitializer(1, 0),
      this._gridElInitializer(1, 0),

    ]
    const chartId = 'd3-view';
    const selection = this._selectSvgEl(chartId);
    this._renderTo(selection);
    setInterval(() => {
      this._update(selection);
    }, 10);
  }
  private _selectSvgEl(idIn) {
    return d3.select(`#${idIn}`)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
  }

  private _renderTo(selection) {

    this.curGridState = this.curGridState.concat(this.curGridState);
    selection
      .selectAll('path')
      .data(this.curGridState).enter().append('path')

      .attr('d', (d) => { console.log(d); return d._line(d.pts); })
      .attr("stroke", d => { return 'black' })
      .attr("stroke-width", 2)
      .attr("fill", "none")

  }

  private _update(selection) {
    selection
      .selectAll('path')
      .each(el => {
        el.pts.map(el => {
          el.x = 100 + 10 * Math.sin((new Date).getTime() / 1000);
        })
      })
      .attr('d', (d) => { console.log(d); return d._line(d.pts); });
  }

  private _gridElInitializer(gridBaseX: number, gridBaseY: number) {
    return {
      gridBaseX: gridBaseX,
      gridBaseY: gridBaseY,
      pts: this._generateGridPts(gridBaseX, gridBaseY),
      _line: this._generateLine
    }

  }

  private _generateLine = d3.line()
    .x(function (d) { return d.x })
    .y(function (d) { return d.y })

  // 
  private _generateGridPts(gridBaseX: number, gridBaseY: number): Array<pv.gridItem> {
    const ret: Array<pv.gridItem> = [];

    for (let i = 0; i <= 20; i++) {
      if (gridBaseX === 0) {
        if (gridBaseY === 0) {
          // topleft / top right borders. deal later
        }
        else {
          // horizontal
          ret.push({
            gridX: gridBaseX,
            gridY: gridBaseX,
            x: 10 * gridBaseX,
            y: 10 * (gridBaseY + i),
            color: 'black'
          })
        }

      }
      else {
        // vertical line
        ret.push({
          gridX: gridBaseX,
          gridY: gridBaseX,
          x: 10 * gridBaseX,
          y: 10 * (gridBaseY + i),
          color: 'black'
        })
      }
    }

    return ret;
  }

}
