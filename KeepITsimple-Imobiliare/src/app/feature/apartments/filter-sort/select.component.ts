import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  selectedOras: String = "--Alege orasul--";

  Orase: Array<any> = [
    { name: 'Cluj-Napoca', cartiere: [ {name: 'Manastur'},
        {name: 'Marasti'},{name: 'Intre Lacuri'}] },
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

    this.cities = this.Orase.find((cntry: any) => cntry.name == this.selectedOras).cartiere.find((car: any) => car.name == car.target.value).cities;
  }
}
