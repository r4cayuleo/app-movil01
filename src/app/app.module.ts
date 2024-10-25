import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Importa los módulos de Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment'; // Importa el archivo de configuración

// Importa servicios y otros módulos necesarios
import { AuthService } from './services/auth.service'; // Servicio de autenticación

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // Inicializa Firebase con la configuración del environment
    AngularFireModule.initializeApp(environment.firebase), // Esto inicializa Firebase
    AngularFireAuthModule,  // Para manejar autenticación
    AngularFireStorageModule // Para manejar almacenamiento de archivos en Firebase
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService  // Añade el servicio de autenticación a los proveedores
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('Firebase inicializado');
  }
}
