import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../shared/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  @Input()
  projects: Project[] = []

  @Output()
  saveListItem = new EventEmitter<any>()

  @Output()
  deleteProject = new EventEmitter<number>()

  editingProject: Project | null = null;
  searchBy: string = ''

  constructor(private router: Router) {}

  onDelete(event: number) {
    console.log(`Still deleting id ${event}`)

    this.deleteProject.emit(event)
  }

  onEdit(event: any) {
    this.editingProject = event.editingProject;
    console.log(this.editingProject)
  }

  onSave(event: any) {
    console.log('saved')
    this.editingProject = null
    this.saveListItem.emit({ item: event.project })
  }

  onCancel() {
    this.editingProject = null
  }

  navigateToCreate() {
    this.router.navigateByUrl('projects/create')
  }
}

