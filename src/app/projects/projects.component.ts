import { Component, OnInit } from '@angular/core';
import * as projectsObjects from './../Json/projects.json';

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

  constructor() {
    this.projects = projectsObjects.default.projects;
  }

  ngOnInit() {
    document.getElementById('background-img').className = 'project-page';
  }

}
