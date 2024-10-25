import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.getUser().pipe(
      take(1),
      map(user => {
        if (user) {
          return true;  // Si el usuario está autenticado, puede acceder a la ruta
        } else {
          this.router.navigate(['/login']);  // Si no está autenticado, redirigir al login
          return false;
        }
      })
    );
  }
}