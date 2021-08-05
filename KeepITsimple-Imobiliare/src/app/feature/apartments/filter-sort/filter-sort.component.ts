import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-sort',
  templateUrl: './filter-sort.component.html',
  styleUrls: ['./filter-sort.component.scss']
})
export class FilterSortComponent implements OnInit {

  constructor() { }

  panelOpenState = false;

  ngOnInit(): void {
  }
}
