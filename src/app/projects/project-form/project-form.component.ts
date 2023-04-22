import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Project } from '../shared/project.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent implements OnInit {
  @Input()
  project!: Project;

  @Output()
  save = new EventEmitter<any>();

  @Output()
  cancel = new EventEmitter<void>();

  @Output()
  delete = new EventEmitter<number>();

  projectForm: FormGroup = new FormGroup({});

  onDeleteClick() {
    console.log(`Deleting project with id ${this.project.id}`)

    this.delete.emit(this.project.id)
  }

  onCancelClick(event: Event) {
    event.preventDefault();
    this.cancel.emit();
  }

  onSubmit() {
    if (this.projectForm.invalid) {
      return;
    }
    const updatedProject = {
      ...this.project,
      ...this.projectForm.value,
    };
    this.save.emit({ project: updatedProject });
  }

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(this.project.name, [
        Validators.minLength(3),
        Validators.required,
      ]),
      description: new FormControl(this.project.description),
      budget: new FormControl(this.project.budget),
      isActive: new FormControl(this.project.isActive),
    });
  }
}
