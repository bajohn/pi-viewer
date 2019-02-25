import { Component, OnInit } from '@angular/core';
import { pv } from '../../classes'
import * as d3 from "d3"
import { GridInitService } from 'src/app/services/grid-init.service';

@Component({
  selector: 'app-d3-view-stateful',
  templateUrl: './d3-view-stateful.component.html',
  styleUrls: ['./d3-view-stateful.component.css']
})
export class D3ViewStatefulComponent implements OnInit {

  constructor(
    private gridInitServ: GridInitService
  ) { }
  _self = this;
  curGridState: Array<pv.gridItem> = []

  ngOnInit() {
    this.curGridState = this.gridInitServ.generateCoord();
    const chartId = 'd3-view';
    const selection = this._selectSvgEl(chartId);

    this._initialRender(selection);

    this._createMouseEvents(selection);
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

  _createMouseEvents(selection) {
    
  }



}
