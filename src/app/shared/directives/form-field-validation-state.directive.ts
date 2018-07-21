import { Directive, OnInit, Input, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';


@Directive({
  selector: '[w4FormFieldValidationState]'
})
export class FormFieldValidationStateDirective {

  @Input()
  w4FormFieldValidationState: FormControl;

  @HostBinding('class.has-error')
  hasError: boolean;

  constructor() { }

  ngOnInit() {
    this.w4FormFieldValidationState.statusChanges.subscribe(controlValue => {
      if (this.w4FormFieldValidationState.valid || this.w4FormFieldValidationState.disabled) {
        this.hasError = false;
      } else {
        this.hasError = true;
      }
    });
  }
}
