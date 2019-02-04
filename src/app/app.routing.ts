import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonasComponent } from './personas/personas.component';
import { SorteoComponent } from './sorteo/sorteo.component';
import { CrearComponent } from './personas/crear/crear.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'personas', pathMatch: 'full', component: PersonasComponent },
  { path: 'personas/crear', pathMatch: 'full', component: CrearComponent },
  { path: 'personas/:id', component: CrearComponent },
  { path: 'sorteo', pathMatch: 'full', component: SorteoComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);