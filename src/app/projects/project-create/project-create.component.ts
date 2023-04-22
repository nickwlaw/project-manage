import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent {
  @Output()
  save = new EventEmitter<Project>();
  @Output()
  cancel = new EventEmitter<void>();

  projectForm: FormGroup = new FormGroup({});

  onCancelClick(event: Event) {
    event.preventDefault();
    this.cancel.emit();
  }

  onSubmit() {
    if (this.projectForm.invalid) {
      return;
    }
    const newProject = new Project(
      0,
      this.projectForm.get('name')?.value,
      this.projectForm.get('description')?.value,
      'assets/placeimg_500_300_arch5.jpg',
      0,
      new Date(),
      this.projectForm.get('budget')?.value,
      this.projectForm.get('isActive')?.value,
      false
    )
    this.save.emit(newProject);
  }

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl('', [
        Validators.minLength(3),
        Validators.required,
      ]),
      description: new FormControl(''),
      budget: new FormControl(0.0),
      isActive: new FormControl(true),
    });
  }
}
