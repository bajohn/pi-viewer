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

  width = 1;
  height = 1;

  ngOnInit() {
    const chartId = 'd3-view';
    this.svgSelection = this._selectSvgEl(chartId);

    this._initialRender(this.svgSelection);
  }
  private _selectSvgEl(idIn) {


    return d3.select(`#${idIn}`)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .on('mouseout', d => { this._resetGrid() });
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
      .attr('stroke-width', .5)
      .attr('stroke', d => { return d.border })
      .on('mouseover', d => { this._gridSelector(d) })
      .on('mouseout', d => { this._handleMouseOut(d) });

  }

  private _getKey(d: pv.gridItem) {
    return d.coordX + '.' + d.coordY;
  }

  private _handleMouseOver(curCoord: pv.gridItem) {

    // This works, change white->gray
    curCoord.fill = 'gray';
    this.svgSelection
      .selectAll('rect')
      .data([curCoord], (d) => {
        return this._getKey(d);
      })
      .attr('fill', d => { return d.fill });
  }

  private _handleMouseOut(curCoord: pv.gridItem) {

    // This works, change red->blue
    // curCoord.fill = 'white';
    this.svgSelection
      .selectAll('rect')
      .data([curCoord], (d) => {
        return this._getKey(d);
      })
      .attr('fill', d => { return 'white' });
  }

  public _gridSelector(curCoord: pv.gridItem) {

    const coordList: Array<pv.gridItem> = [];
    //todo: want to use this limiter to avoid going off the grid
    // && h + this.height < this.gridInitServ.gridParams.gridLimit
    for (let h = 0; h < this.height; h++) {
      for (let w = 0; w < this.width; w++) {
        coordList.push(this.gridInitServ.generateCoord(w + curCoord.coordX, h + curCoord.coordY));
      }
    }

    //this._resetGrid();



    coordList.map(el => {
      el.fill = 'gray';
      return el;
    });

    this.svgSelection
      .selectAll('rect')
      .data(coordList, (d) => {
        return this._getKey(d);
      })
      .attr('fill', d => { return d.fill });
  }

  // todo- make this more efficient! This is wiping the grid everytime something changes
  
  _resetGrid() {
    this.gridInitServ.grid.map(el => {
      el.fill = 'white';
    });
    this.svgSelection
      .selectAll('rect')
      .data(this.gridInitServ.grid, (d) => {
        return this._getKey(d);
      })
      .attr('fill', d => { return d.fill });


  }

}
