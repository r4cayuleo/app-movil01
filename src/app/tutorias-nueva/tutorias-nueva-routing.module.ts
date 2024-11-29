import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutoriasNuevaPage } from './tutorias-nueva.page';

const routes: Routes = [
  {
    path: '',
    component: TutoriasNuevaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutoriasNuevaPageRoutingModule {}
