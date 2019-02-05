import { Component, OnInit } from '@angular/core';
import * as d3 from "d3"
import { pv } from '../../classes'

@Component({
  selector: 'app-d3-view',
  templateUrl: './d3-view.component.html',
  styleUrls: ['./d3-view.component.css']
})
export class D3ViewComponent implements OnInit {
  gridParams = new pv.gridParams();
  constructor() { }

  ngOnInit() {


    const chartId = 'd3-view';
    const selection = d3.select(`#${chartId}`)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')


    var enterData = selection

      .selectAll('path')
      .data(this._getStartPoints(this.gridParams.gridLimit)).enter().append('path')

      // .attr('d', (d) => { 
      //   console.log(d); 
      //   this._lineFunc(d) })
      .attr('d', d => {
        console.log(d);
        if (d.x === 0) {
          return this._lineFunc(this._drawHorizGridLine(d.y))
        }
        else {
          return this._lineFunc(this._drawVertGridLine(d.x))
        }
      })
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr("fill", "none");
  }

  private _getGridLine(startX: number, startY: number): Array<pv.gridItem> {




    const ret: Array<pv.gridItem> = [];
    for (let i = 0; i <= this.gridParams.gridLimit; i++) {
      ret.push(
        {
          x: this.gridParams.gridScale * (i + startX),
          y: this.gridParams.gridScale * (i + startY),
          gridX: this.gridParams.gridScale * i,
          gridY: 10
        })
    }
    return ret;
  }

  private _getStartPoints(gridLimit: number): Array<pv.coord> {
    const ret = [];
    for (let i = 0; i < gridLimit; i++) {
      ret.push({
        x: i,
        y: 0
      })
      ret.push({
        x: 0,
        y: i
      })
    }
    console.log(ret);
    return ret;
  }

  private _drawHorizGridLine(yCoord: number): Array<pv.gridItem> {
    const ret = [];
    for (let i = 0; i < this.gridParams.gridLimit; i++) {

      ret.push({
        x: i * this.gridParams.gridScale,
        y: (yCoord + this.gridParams.topBuffer) * this.gridParams.gridScale,
        gridX: i,
        gridY: yCoord + this.gridParams.topBuffer
      })
    }
    return ret;
  }

  private _drawVertGridLine(xCoord: number): Array<pv.gridItem> {
    const ret = [];
    for (let i = 0; i < this.gridParams.gridLimit; i++) {

      ret.push({
        x: (xCoord + this.gridParams.leftBuffer) * this.gridParams.gridScale,
        y:  i * this.gridParams.gridScale,
        gridX: xCoord + this.gridParams.leftBuffer,
        gridY: i
      })
    }
    return ret;
  }

  private _lineFunc = d3.line()
    .x(function (d) { return d.x })
    .y(function (d) { return d.y })
  //.curve(d3.curveLinear);

}


// return [1, 2, 3, 4, 5].reduce<Array<gridItem>>((accum, val) => {
//   return accum.concat([{
//     val: val,
//     x: 10 * val,
//     y: 0
//   }])
// }, []);