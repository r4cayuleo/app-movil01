import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { DetalleTutoriaPage } from './detalle-tutoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetalleTutoriaPage
      }
    ])
  ],
  declarations: [DetalleTutoriaPage]
})
export class DetalleTutoriaPageModule {}
