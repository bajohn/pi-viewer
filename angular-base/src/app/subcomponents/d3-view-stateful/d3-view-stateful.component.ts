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
  private curGridState: Array<pv.gridItem> = []
  private svgSelection: any = '';

  ngOnInit() {
    const chartId = 'd3-view';
    this.svgSelection = this._selectSvgEl(chartId);

    this._initialRender(this.svgSelection);
  }
  private _selectSvgEl(idIn) {
    return d3.select(`#${idIn}`)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%');
  }



  // Default rendering
  private _initialRender(selection) {

    //this.curGridState = this.curGridState.concat(this.curGridState);

    selection.selectAll('rect')
      .data(this.gridInitServ.grid, (d) => {
        // Key function, must return a unique value for every path.
        return this._getKey(d);
      })
      .enter()
      .append('rect')
      .attr('x', d => { return d.pixelX })
      .attr('y', d => { return d.pixelY })
      .attr('height', this.gridInitServ.gridParams.gridScale)
      .attr('width', this.gridInitServ.gridParams.gridScale)
      .attr('fill', d => { return d.fill })
      .attr('stroke-width', 3)
      .attr('stroke', d => { return d.border })
      .on('mouseover', d => { this.handleMouseMove(d) });

  }

  private _getKey(d: pv.gridItem) {
    return d.coordX + '.' + d.coordY;
  }

  public handleMouseMove(curCoord: pv.gridItem) {

    // This works, change red->blue
    curCoord.fill = 'blue';
    this.svgSelection
      .selectAll('rect')
      .data([curCoord], (d) => {
        return this._getKey(d);
      })
      .attr('fill', d => { return d.fill })
  }

}
