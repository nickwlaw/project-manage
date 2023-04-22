import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectDetailContainerComponent } from './project-detail-container/project-detail-container.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectCreateContainerComponent } from './project-create-container/project-create-container.component';

@NgModule({
  declarations: [
    ProjectsContainerComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectFormComponent,
    ProjectDetailComponent,
    ProjectDetailContainerComponent,
    ProjectCreateComponent,
    ProjectCreateContainerComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  exports: [ProjectsContainerComponent],
})
export class ProjectsModule {}
