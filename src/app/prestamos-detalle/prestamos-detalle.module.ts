import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestamosDetallePageRoutingModule } from './prestamos-detalle-routing.module';

import { PrestamosDetallePage } from './prestamos-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestamosDetallePageRoutingModule
  ],
  declarations: [PrestamosDetallePage]
})
export class PrestamosDetallePageModule {}
