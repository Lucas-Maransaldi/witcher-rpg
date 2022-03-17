import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'personagem', pathMatch: 'full' },
  { path: 'personagem', loadChildren: () => import('../modules/personagem/personagem.module').then(m => m.PersonagemModule)}
];

export const AppRoutes = RouterModule.forChild(routes);
