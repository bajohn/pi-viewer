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
  private curPtList: Array<pv.coord> = [];
  private svgSelection: any = '';

  ngOnInit() {
    this.curGridState = this.gridInitServ.generateCoord();
    const chartId = 'd3-view';
    this.svgSelection = this._selectSvgEl(chartId);

    this._initialRender(this.svgSelection);

    // setInterval(() => {
    //   this._update(selection);
    // }, 10);
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
    selection
      .selectAll('path')
      .data(this.curGridState, (d) => {
        // Key function, must return a unique value for every path.
        return [d.gridX, d.gridY]
      })
      .enter().append('path')

      .attr('d', (d) => { return d._line(d.pts); })
      .attr("stroke", d => { return 'rgba(112, 112, 112, 1)' })
      .attr("stroke-width", .5)
      .attr("fill", "none")

    const allPts = this._concatAllPts();
    this.curPtList = allPts;
    selection.selectAll('rect')
      .data(allPts, (d) => {
        // Key function, must return a unique value for every path.
        return [d.x, d.y]
      })
      .enter()
      .append('rect')
      .attr('x', d => { return d.x })
      .attr('y', d => { return d.y })
      .attr('height', this.gridInitServ.gridParams.gridScale - 1)
      .attr('width', this.gridInitServ.gridParams.gridScale - 1)
      .attr('fill', d => { return d.rectColor })
      .on('mousemove', d => { this.handleMouseMove(d) });

  }

  private _concatAllPts() {
    return this.curGridState.reduce<Array<pv.coord>>((accum, el: pv.gridItem) => {
      // const copyEl = Object.assign({}, el);
      el.pts.map(locEl => { return locEl.rectColor = 'rgba(0,0,0,0)' })
      return accum.concat(el.pts);
    }, []);
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

  // _createMouseEvents(selection) {
  //   selection.on('mousemove', function () {
  //     console.log('mouse', this)
  //   });
  public handleMouseMove(curCoord: pv.coord) {

    console.log(curCoord);
    curCoord.rectColor = 'red';
    //d3.select(this).datum(curCoord);
    const curPts = this.curPtList.push(curCoord);

    this.svgSelection
      .selectAll('rect')
      .data(this.curPtList, (d) => {
        // Key function, must return a unique value for every path.
        return [d.x, d.y]
      })
      .enter()
      .append('rect')
      .attr('x', d => { return d.x })
      .attr('y', d => { return d.y })
      .attr('height', this.gridInitServ.gridParams.gridScale - 1)
      .attr('width', this.gridInitServ.gridParams.gridScale - 1)
      .attr('fill', d => { return d.rectColor })
      .on('mousemove', d => { this.handleMouseMove(d) });
  }

}
