import { Component } from '@angular/core';
import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-create-container',
  templateUrl: './project-create-container.component.html',
  styleUrls: ['./project-create-container.component.css']
})
export class ProjectCreateContainerComponent {
  project: Project | undefined;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private projectService: ProjectService, private router: Router) {}

  onCreateProject(event: Project) {
    const project: Project = event;
    this.projectService.create(project).subscribe(
      (newProject) => {
        this.router.navigateByUrl('projects')
      },
      error => (this.errorMessage = error)
    );
  }

  onCancel() {
    this.router.navigateByUrl('projects')
  }
}
