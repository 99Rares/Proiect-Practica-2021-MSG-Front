import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-sort',
  templateUrl: './filter-sort.component.html',
  styleUrls: ['./filter-sort.component.scss']
})
export class FilterSortComponent implements OnInit {

  constructor() {
  }

  panelOpenState = false;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 500000;
  min = 0;
  showTicks = false;
  step = 1000;
  thumbLabel = true;
  value = 0;
  vertical = false;

  ngOnInit(): void {
  }

}
