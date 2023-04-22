import { Component, OnInit, Input } from '@angular/core';
import {
  AbstractControl,
  AbstractControlDirective,
  FormControl,
} from '@angular/forms';

const errorMessages: any = {
  name: {
    required: 'Name is required.',
    minlength: 'Name must be at least 3 characters long.',
  },
  description: {
    required: 'Description is required.',
  },
};

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.css'],
})
export class ValidationErrorsComponent implements OnInit {
  @Input()
  control: AbstractControl | null | undefined;

  constructor() {}

  ngOnInit() {}

  shouldShowErrors(): boolean {
    if (!this.control) return false;
    return this.control.invalid && this.control.dirty && this.control.touched;
  }

  getControlName(c: AbstractControl): string | null | undefined {
    const formGroup: any = c?.parent?.controls;
    return Object.keys(formGroup).find((name: string) => {
      return c === formGroup[name];
    });
  }

  getErrorMessages(): string[] {
    if (!this.control?.errors) {
      return [];
    }
    const controlName = this.getControlName(this.control) || '';

    return Object.keys(this.control?.errors).map<any>((key) => {
      if (!this.control?.errors) {
        return;
      }
      return errorMessages[controlName][key];
    });
  }
}
