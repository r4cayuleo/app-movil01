import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestamosDetallePage } from './prestamos-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: PrestamosDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestamosDetallePageRoutingModule {}
