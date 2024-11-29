import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TutoriasPageRoutingModule } from './tutorias-routing.module';
import { TutoriasPage } from './tutorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutoriasPageRoutingModule
  ],
  declarations: [TutoriasPage]
})
export class TutoriasPageModule {}
