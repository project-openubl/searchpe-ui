import { Directive, OnInit, Input, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[w4FormRequiredLabel]'
})
export class FormRequiredLabelDirective {


  @Input()
  w4FormRequiredLabel: FormControl;

  @HostBinding('class.required-pf')
  isRequired: boolean;

  constructor() { }

  ngOnInit() {
    const validator: any = this.w4FormRequiredLabel.validator && this.w4FormRequiredLabel.validator(new FormControl());
    this.isRequired = validator && validator.required;
  }


}
