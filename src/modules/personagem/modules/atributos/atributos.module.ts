import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { CustomInputModule } from './../../../../components/custom-input/custom-input.module';
import { AtributosComponent } from './atributos.component';

@NgModule({
  imports: [
    CommonModule,
    CustomInputModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  declarations: [AtributosComponent],
  exports: [AtributosComponent]
})
export class AtributosModule { }
