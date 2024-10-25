import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: 'intercambio-libros', loadChildren: () => import('./intercambio-libros/intercambio-libros.module').then( m => m.IntercambioLibrosPageModule) },
  { path: 'gestion-grupos', loadChildren: () => import('./gestion-grupos/gestion-grupos.module').then( m => m.GestionGruposPageModule) },
  { path: 'tutorias-pares', loadChildren: () => import('./tutorias/tutorias.module').then( m => m.TutoriasPageModule) },
  { path: 'prestamos-equipos', loadChildren: () => import('./prestamos-equipos/prestamos-equipos.module').then( m => m.PrestamosEquiposPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
