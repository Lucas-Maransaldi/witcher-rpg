import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainMenuComponent } from './main-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainMenuComponent],
  exports : [MainMenuComponent]
})
export class MainMenuModule { }
