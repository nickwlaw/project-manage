import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { ValidationErrorsComponent } from '../shared/validation-errors/validation-errors.component';


@NgModule({
  declarations: [
    SearchPipe,
    ValidationErrorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchPipe,
    ValidationErrorsComponent
  ]
})
export class SharedModule { }
