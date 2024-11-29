import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutoriasNuevaPageRoutingModule } from './tutorias-nueva-routing.module';

import { TutoriasNuevaPage } from './tutorias-nueva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutoriasNuevaPageRoutingModule
  ],
  declarations: [TutoriasNuevaPage]
})
export class TutoriasNuevaPageModule {}
