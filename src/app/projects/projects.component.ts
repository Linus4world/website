import { Component, OnInit } from '@angular/core';
import * as projectsObjects from './../Json/projects.json';
import { AlertService } from '../services/alert.service.js';
import { AlertType } from '../alert-type.enum.js';
import { OverlayService } from '../overlay.service.js';
import { Project } from '../Json/project.interface.js';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: Project;


  constructor(private alertService: AlertService, private overlayService: OverlayService) {
    this.projects = projectsObjects.default.projects;
  }

  ngOnInit() {
    document.getElementById('background-img').className = 'project-page';
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

  public openOverlay(project) {
    console.log('opening overlay: ', project);
    this.overlayService.openOverlay(project);
  }
}
