import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-filter-sort',
  templateUrl: './filter-sort.component.html',
  styleUrls: ['./filter-sort.component.scss']
})
export class FilterSortComponent implements OnInit {

  constructor() { }

  panelOpenState = false;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 90000;
  min = 0;
  showTicks = false;
  step = 100;
  thumbLabel = true;
  value = 0;
  vertical = false;

  @Output()
  formFilterOutput:EventEmitter<any> = new EventEmitter<any>();

  @Output()
  formSortOutput:EventEmitter<any> = new EventEmitter<any>();

  @Output()
  formResetOutput:EventEmitter<any> = new EventEmitter<any>();

    ngOnInit(): void {
  }

  formFilter = new FormGroup({
    pret: new FormControl('', []),
    tip: new FormControl('', []),
    oras: new FormControl('', []),
    cartier: new FormControl('', []),
  });

  formSort = new FormGroup({
    pretsort: new FormControl('', []),
    suprafata: new FormControl('', []),
  });

  selectedOras: String = "--Alege orasul--";

  Orase: Array<any> = [
    { name: 'Cluj', cartiere: [ {name: 'Manastur'},
        {name: 'Marasti'},{name: 'Intre Lacuri'},{name: 'Zorilor'}] },
    { name: 'Brasov', cartiere: [ {name: 'Astra'}, {name: 'Valea Cetatii'} ] },
    { name: 'Sibiu', cartiere: [ {name: 'Valea Aurie'} ] },
    { name: 'Timisoara', cartiere: [ {name: 'Calea Lipovei'}] }
  ];


  cartiere: Array<any> = [];


  cities: Array<any> = [];


  changeOras(oras: any) {

    this.cartiere = this.Orase.find((cntry: any) => cntry.name == oras.target.value).cartiere;
  }


  changeCartier(cartier: any) {

    this.cities = this.Orase.find((cntry: any) => cntry.name == this.formFilter.controls["oras"].value).cartiere;
  }

  onSubmitfilter(){
    console.log(this.formFilter.value)
    this.formFilterOutput.emit(this.formFilter.value);
    this.formFilter.reset();
  }

  onSubmitsort(){
    console.log(this.formSort.value)
    this.formSortOutput.emit(this.formSort.value);
    this.formSort.reset();
  }
}
