import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestamosEquiposPage } from './prestamos-equipos.page';

const routes: Routes = [
  {
    path: '',
    component: PrestamosEquiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestamosEquiposPageRoutingModule {}
