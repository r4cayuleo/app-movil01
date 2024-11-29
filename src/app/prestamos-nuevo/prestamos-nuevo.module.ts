import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestamosNuevoPageRoutingModule } from './prestamos-nuevo-routing.module';

import { PrestamosNuevoPage } from './prestamos-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestamosNuevoPageRoutingModule
  ],
  declarations: [PrestamosNuevoPage]
})
export class PrestamosNuevoPageModule {}
