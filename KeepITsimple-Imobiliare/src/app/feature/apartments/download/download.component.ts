import {Component, OnInit} from '@angular/core';
import {ApartmentService} from "../apartment.service";
import {saveAs} from 'file-saver';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor(private service: ApartmentService) {
  }

  ngOnInit(): void {
  }

  downloadFile(filename: string): void {
    this.service
      .download()
      .subscribe(blob => saveAs(blob, filename));
  }

}
