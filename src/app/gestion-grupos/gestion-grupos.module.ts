import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionGruposPageRoutingModule } from './gestion-grupos-routing.module';

import { GestionGruposPage } from './gestion-grupos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionGruposPageRoutingModule
  ],
  declarations: [GestionGruposPage]
})
export class GestionGruposPageModule {}
