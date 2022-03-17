import { PersonagemComponent } from './personagem.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PersonagemComponent },
];

export const PersonagemRoutes = RouterModule.forChild(routes);
