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

  curGrid = [];
  constructor() { }

  ngOnInit() {

    this.curGrid = this._getStartPoints(this.gridParams.gridLimit);
    const chartId = 'd3-view';
    const selection = this.selectSvgEl(chartId);
    this.renderTo(selection);



  }
  selectSvgEl(idIn) {
    return  d3.select(`#${idIn}`)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
  }

  renderTo(selection) {
    const self = this;
    selection
      .selectAll('path')
      .data( this.curGrid).enter().append('path')

      .attr('d', this.getLineFromGrid.bind(this))
      .attr("stroke", d => { return d.color })
      .attr("stroke-width", 2)
      .attr("fill", "none")
      .on("mouseover", function(d) {self.mouseOver.call(this, self, d)});
  }

  getLineFromGrid(d:pv.gridItem) {

      if (d.gridX === 0) {
        if (d.gridY === 0) {
          return this._lineFunc(
            this._drawHorizGridLine(d.gridY)
              .concat(this._drawVertGridLine(d.gridX)))
        }
        else {
          return this._lineFunc(this._drawHorizGridLine(d.gridY))
        }
      }
      else {
        return this._lineFunc(this._drawVertGridLine(d.gridX))
      }
  
    }

  mouseOver(this: HTMLElement, self: D3ViewComponent, d: pv.gridItem) {

    //console.log(d3.select(this).transition());

    
    d3.select(this).each((hoverEl: pv.gridItem)=>{
      const newGrid = d;
      

      if(d.gridX===0){
        newGrid.gridY = d.gridY + 0.1;
      }
      else {
        newGrid.gridX = d.gridX + 0.1;
      }

      // d3.select(this).remove();
      d3.select(this).attr('d', self.getLineFromGrid(newGrid));
      d3.select(this).attr('stroke',d => { return d.color });
      console.log(newGrid);
    
    })
  }

  gridElEq(gridEl1, gridEl2) {
    return gridEl1.gridX === gridEl2.gridX && gridEl1.gridY === gridEl2.gridY;
  }

  // private _getCurGridItem(coord: pv.coord):pv.gridItem {
  //   const x = coord.x;
  //   const y = coord.y;
  //   const gridX = Math.floor(x/this.gridParams.gridScale);
  //   const gridY = Math.floor(y/this.gridParams.gridScale);
  //   return {
  //     x,y,gridX,gridY
  //   }
  // }

  private _getStartPoints(gridLimit: number): Array<pv.gridItem> {
    const ret = [];
    for (let i = 0; i <= gridLimit; i++) {
      ret.push({
        gridX: i,
        gridY: 0,
        color: 'black'
      })
      ret.push({
        gridX: 0,
        gridY: i,
        color: 'black'
      })
    }
    return ret;
  }

  private _drawHorizGridLine(yCoord: number): Array<pv.gridItem> {
    const ret = [];
    for (let i = 0; i <= this.gridParams.gridLimit; i++) {

      ret.push({
        x: (i + this.gridParams.leftBuffer) * this.gridParams.gridScale,
        y: (yCoord + this.gridParams.topBuffer) * this.gridParams.gridScale,
        gridX: i + this.gridParams.leftBuffer,
        gridY: yCoord + this.gridParams.topBuffer
      })
    }
    return ret;
  }

  private _drawVertGridLine(xCoord: number): Array<pv.gridItem> {
    const ret = [];
    for (let i = 0; i <= this.gridParams.gridLimit; i++) {

      ret.push({
        x: (xCoord + this.gridParams.leftBuffer) * this.gridParams.gridScale,
        y: (i + this.gridParams.topBuffer) * this.gridParams.gridScale,
        gridX: xCoord + this.gridParams.leftBuffer,
        gridY: i + this.gridParams.topBuffer
      })
    }
    return ret;
  }

  _drawBoth(): Array<pv.gridItem> {
    return this._drawVertGridLine(0).concat(this._drawHorizGridLine(0));
  }

  private _lineFunc = d3.line()
    .x(function (d) { return d.x })
    .y(function (d) { return d.y })
}