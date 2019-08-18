import { Component, Inject } from '@angular/core';
import { Project } from '../../Json/project.interface';
import { PROJECT_DATA_INJECTION_TOKEN } from './project-overlay.token';

@Component({
  selector: 'app-project-overlay',
  templateUrl: './project-overlay.component.html',
  styleUrls: ['./project-overlay.component.scss']
})
export class ProjectOverlayComponent {
  constructor(@Inject(PROJECT_DATA_INJECTION_TOKEN) public project: Project) {}
}
