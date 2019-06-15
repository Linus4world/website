import { Component, OnInit } from '@angular/core';
import { AlertService } from './services/alert.service';
import { AlertType } from './alert-type.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hi, I am Linus Kreitner. Welcome to my Portfolio!';
  public mail = AlertType.MAIL;
  public download = AlertType.DOWNLOAD;
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private alertService: AlertService, private router: Router) {
    this.navLinks = [
      {
          label: 'Home',
          link: './home',
          index: 0
      }, {
          label: 'Projects',
          link: './projects',
          index: 1
      }, {
          label: 'CV',
          link: './cv',
          index: 2
      },
      {
        label: 'Contact',
        link: './contact',
        index: 3
      }
  ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  public closeAlert(type: AlertType) {
    this.alertService.closeAlert(type);
  }
}
