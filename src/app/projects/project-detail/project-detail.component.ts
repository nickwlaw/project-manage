import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  @Input()
  project: Project | undefined;

  constructor() {}

  ngOnInit() {}
}
