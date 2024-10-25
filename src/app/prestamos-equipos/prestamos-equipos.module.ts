import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestamosEquiposPageRoutingModule } from './prestamos-equipos-routing.module';

import { PrestamosEquiposPage } from './prestamos-equipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestamosEquiposPageRoutingModule
  ],
  declarations: [PrestamosEquiposPage]
})
export class PrestamosEquiposPageModule {}
