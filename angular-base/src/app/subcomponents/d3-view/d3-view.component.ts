import { Component, OnInit } from '@angular/core';
import * as d3 from "d3"
import { gridItem } from '../../index'

@Component({
  selector: 'app-d3-view',
  templateUrl: './d3-view.component.html',
  styleUrls: ['./d3-view.component.css']
})
export class D3ViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const sampleGrid: Array<gridItem> = this._getGrid()
    console.log(sampleGrid);

    const chartId = 'd3-view';
    const selection = d3.select(`#${chartId}`)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')

    var enterData = selection
      // .selectAll('rect')
      // .data(sampleGrid).enter()
      // .append('rect')

      // .attr('x', d => { return d.x })
      // .attr('y', d => { return d.y })
      // .attr('fill', 'red')
      // .attr('width', d => { return 2 })
      // .attr('height', d => { return 2 })
      .selectAll('polygon')
      .data(sampleGrid).enter()
      .append('polygon')
      .attr('points', d => {
        return `${5 * d.x},0 ${5 * d.x + 10},0 ${5 * d.x + 10},10 ${5 * d.x},10 `
      })
      .attr('fill', 'red')
  }

  private _getGrid(): Array<gridItem> {

  const gridSize = 100;
  
  const ret: Array<gridItem> = [];
  for (let i = 0; i <= gridSize; i++) {
    ret.push(
      {
        //val: i,
        x: 10 * i,
        y: 0,
        gridX: 10,
        gridY: 10
      })
  }
  return ret;
}

}


// return [1, 2, 3, 4, 5].reduce<Array<gridItem>>((accum, val) => {
//   return accum.concat([{
//     val: val,
//     x: 10 * val,
//     y: 0
//   }])
// }, []);