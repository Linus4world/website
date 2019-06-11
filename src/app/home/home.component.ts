import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { AlertType } from '../alert-type.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private alertService: AlertService) { }

  ngOnInit() {
    document.getElementById('background-img').className = 'home-page';
  }

  public openInNewTab(url) {
    const win = window.open(url, '_blank');
    win.focus();
  }

  public sendMail() {
    window.location.href = 'mailto:kreitner.webserver@gmail.com?subject=[Website] Contact Mail';
    this.alertService.activateAlert(AlertType.MAIL);
  }
}
