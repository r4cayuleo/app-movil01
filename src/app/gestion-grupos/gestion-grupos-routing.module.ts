import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionGruposPage } from './gestion-grupos.page';

const routes: Routes = [
  {
    path: '',
    component: GestionGruposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionGruposPageRoutingModule {}
