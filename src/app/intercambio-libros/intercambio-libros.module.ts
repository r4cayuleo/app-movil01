import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntercambioLibrosPageRoutingModule } from './intercambio-libros-routing.module';

import { IntercambioLibrosPage } from './intercambio-libros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntercambioLibrosPageRoutingModule
  ],
  declarations: [IntercambioLibrosPage]
})
export class IntercambioLibrosPageModule {}
