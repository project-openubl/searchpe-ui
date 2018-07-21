import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldsStatusComponent } from './components/form-fields-status/form-fields-status.component';
import { FormFieldValidationStateDirective } from './directives/form-field-validation-state.directive';
import { FormRequiredLabelDirective } from './directives/form-required-label.directive';
import { FormFieldValidationMessagesComponent } from './components/form-field-validation-messages/form-field-validation-messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormFieldValidationStateDirective,
    FormRequiredLabelDirective,

    FormFieldsStatusComponent,
    FormFieldValidationMessagesComponent
  ],
  exports: [
    FormFieldValidationStateDirective,
    FormRequiredLabelDirective,
    
    FormFieldsStatusComponent,
    FormFieldValidationMessagesComponent,
  ]
})
export class SharedModule { }
