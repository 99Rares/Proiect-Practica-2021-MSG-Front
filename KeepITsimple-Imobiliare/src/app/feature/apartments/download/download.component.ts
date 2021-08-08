import {Component, OnInit} from '@angular/core';
import {ApartmentService} from "../apartment.service";
import {saveAs} from 'file-saver';
import {TokenStorageService} from "../../services/token-storage.service";


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor(private service: ApartmentService,private tokenService:TokenStorageService) {
  }

  ngOnInit(): void {
  }

  downloadFile(filename: string): void {
    this.service
      .download(this.tokenService.getUserEmail())
      .subscribe(blob => saveAs(blob, filename));
  }

}
