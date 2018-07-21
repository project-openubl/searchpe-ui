import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'w4-form-fields-status',
  templateUrl: './form-fields-status.component.html',
  styleUrls: ['./form-fields-status.component.scss']
})
export class FormFieldsStatusComponent implements OnInit {
  @Input()
  w4Form: FormGroup;

  hasRequiredFields: boolean;

  constructor() { }

  ngOnInit() {
    this.refreshState();
  }

  refreshState() {
    this.hasRequiredFields = this.checkIfHasRequiredFields(this.w4Form);
  }

  checkIfHasRequiredFields(formGroup: FormGroup): boolean {
    let result = false;
    for (const key in this.w4Form.controls) {
      if (!this.w4Form.controls[key]) { continue; }

      const abstractControl: AbstractControl = this.w4Form.controls[key];
      if (abstractControl instanceof FormGroup) {
        if (this.checkIfHasRequiredFields(abstractControl)) {
          result = true;
          break;
        }
      } else {
        const validator: any = abstractControl.validator && abstractControl.validator(new FormControl());
        if (validator && validator.required) {
          result = true;
          break;
        }
      }
    }
    return result;
  }

}
