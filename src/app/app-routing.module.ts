import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'intercambio-libros', loadChildren: () => import('./intercambio-libros/intercambio-libros.module').then(m => m.IntercambioLibrosPageModule) },
  { path: 'gestion-grupos', loadChildren: () => import('./gestion-grupos/gestion-grupos.module').then(m => m.GestionGruposPageModule) },
  { path: 'tutorias', loadChildren: () => import('./tutorias/tutorias.module').then(m => m.TutoriasPageModule) },
  { path: 'prestamos-equipos', loadChildren: () => import('./prestamos-equipos/prestamos-equipos.module').then(m => m.PrestamosEquiposPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  { path: 'detalle-libro', loadChildren: () => import('./detalle-libro/detalle-libro.module').then(m => m.DetalleLibroPageModule) },
  { path: 'tutorias-nueva', loadChildren: () => import('./tutorias-nueva/tutorias-nueva.module').then(m => m.TutoriasNuevaPageModule) },
  { path: 'detalle-tutoria/:id', loadChildren: () => import('./detalle-tutoria/detalle-tutoria.module').then(m => m.DetalleTutoriaPageModule) },
  { path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule) },
  { path: 'tutorias-pares', loadChildren: () => import('./tutorias/tutorias.module').then(m => m.TutoriasPageModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
