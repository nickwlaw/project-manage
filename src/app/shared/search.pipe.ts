import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../projects/shared/project.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allProjects: Project[], searchBy: string): Project[] {
    if (searchBy.length === 0) {
      return allProjects
    }

    let filteredProjects: Project[] = []
    for (let project of allProjects) {
      if (project.name.toLowerCase().includes(searchBy.toLowerCase())) {
        filteredProjects.push(project)
      }
    }

    return filteredProjects
  }
}
