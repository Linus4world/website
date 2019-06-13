import { Component, OnInit } from '@angular/core';
import * as projectsObjects from './../Json/projects.json';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertService } from '../services/alert.service.js';
import { AlertType } from '../alert-type.enum.js';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: {
    title: string,
    shortDescription: string,
    paragraphs: {
      title: string,
      text: string,
      images: string[]
    }
  };

  constructor(private alertService: AlertService) {
    this.projects = projectsObjects.default.projects;
  }

  ngOnInit() {
    document.getElementById('background-img').className = 'project-page';
  }

  public download(url: string) {
    if (url === undefined) {
      this.alertService.activateAlert(AlertType.DOWNLOAD);
    } else {
      url = '../../download/' + url;
      const win = window.open(url, '_blank');
      win.focus();
    }
  }
}
