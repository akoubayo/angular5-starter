import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilComponent } from './profil.component';

const routes: Routes = [
  { path: '', component: ProfilComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
