import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userEmail: string | null = null;
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Verifica el estado del usuario autenticado
    this.authService.getUser().subscribe((user) => {
      this.isAuthenticated = !!user;
      this.userEmail = user?.email || 'Usuario no autenticado';
    });
  }

  cerrarSesion() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']); // Redirige al login tras cerrar sesión
    });
  }
}
