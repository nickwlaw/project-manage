import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input()
  project!: Project
  @Output()
  edit = new EventEmitter<any>();

  constructor() {}

  onEditClick(project: Project, event: Event) {
    event.preventDefault();
    this.edit.emit({ editingProject: project })
  }
}
