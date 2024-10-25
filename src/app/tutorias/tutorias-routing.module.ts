import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutoriasPage } from './tutorias.page';

const routes: Routes = [
  {
    path: '',
    component: TutoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutoriasPageRoutingModule {}
