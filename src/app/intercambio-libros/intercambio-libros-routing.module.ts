import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntercambioLibrosPage } from './intercambio-libros.page';

const routes: Routes = [
  {
    path: '',
    component: IntercambioLibrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntercambioLibrosPageRoutingModule {}
