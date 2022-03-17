import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PericiasComponent } from './pericias.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  declarations: [PericiasComponent],
  exports: [PericiasComponent]
})
export class PericiasModule { }
