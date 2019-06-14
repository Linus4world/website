import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { AlertType } from '../alert-type.enum';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    document.getElementById('background-img').className = 'cv-page';
  }

  public download(url: string) {
    if (url === undefined) {
      this.alertService.activateAlert(AlertType.DOWNLOAD);
    } else {
      url = '../../assets/download/' + url;
      const win = window.open(url, '_blank');
      win.focus();
    }
  }

}
