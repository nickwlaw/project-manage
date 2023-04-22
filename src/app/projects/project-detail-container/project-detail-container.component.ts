import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProjectService } from '../shared/project.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-detail-container',
  templateUrl: './project-detail-container.component.html',
  styleUrls: ['./project-detail-container.component.css'],
})
export class ProjectDetailContainerComponent implements OnInit, OnDestroy {
  project: Project | undefined;
  errorMessage: string = '';
  loading: boolean = false;
  projectSubscription!: Subscription;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id: number | null = parseInt(
      this.route.snapshot.paramMap.get('id') ?? '-1',
      10
    );
    this.loading = true;
    this.projectSubscription = this.projectService.find(id).subscribe(
      (data) => (this.project = data),
      (error) => (this.errorMessage = error),
      () => (this.loading = false)
    );
  }

  ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
  }
}
