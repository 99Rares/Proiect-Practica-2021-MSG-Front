import {Component, Input, OnInit} from '@angular/core';
import {ApartmentDetails} from "../model/apartment.data";

@Component({
  selector: 'app-apartment-item',
  templateUrl: './apartment-item.component.html',
  styleUrls: ['./apartment-item.component.scss']
})
export class ApartmentItemComponent implements OnInit {
  @Input() data: ApartmentDetails[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}
