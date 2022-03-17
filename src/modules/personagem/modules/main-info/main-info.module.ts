import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CustomInputModule } from './../../../../components/custom-input/custom-input.module';
import { MainInfoComponent } from './main-info.component';

@NgModule({
  imports: [
    CommonModule,
    CustomInputModule,
    MatCardModule
  ],
  declarations: [MainInfoComponent],
  exports: [MainInfoComponent]
})
export class MainInfoModule { }
