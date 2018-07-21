import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'w4-form-field-validation-messages',
  templateUrl: './form-field-validation-messages.component.html',
  styleUrls: ['./form-field-validation-messages.component.scss']
})
export class FormFieldValidationMessagesComponent implements OnInit {

  @Input()
  w4FormControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
