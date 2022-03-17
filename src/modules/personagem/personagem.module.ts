import { PericiasModule } from './modules/pericias/pericias.module';
import { AtributosModule } from './modules/atributos/atributos.module';
import { MatTabsModule } from '@angular/material/tabs';
import { PersonagemRoutes } from './personagem.routing';
import { MainInfoModule } from './modules/main-info/main-info.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagemComponent } from './personagem.component';

@NgModule({
  imports: [
    CommonModule,
    MainInfoModule,
    PersonagemRoutes,
    MatTabsModule,
    AtributosModule,
    PericiasModule
  ],
  declarations: [PersonagemComponent]
})
export class PersonagemModule { }
