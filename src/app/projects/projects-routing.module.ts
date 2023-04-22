import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { ProjectDetailContainerComponent } from './project-detail-container/project-detail-container.component';
import { ProjectCreateContainerComponent } from './project-create-container/project-create-container.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsContainerComponent },
  { path: 'projects/create', component: ProjectCreateContainerComponent },
  { path: 'projects/:id', component: ProjectDetailContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
