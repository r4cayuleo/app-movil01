import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Intercambio de Libros', url: '/intercambio-libros', icon: 'book' },
    { title: 'Gestión de Grupos', url: '/gestion-grupos', icon: 'people' },
    { title: 'Tutorías entre Pares', url: '/tutorias-pares', icon: 'school' },
    { title: 'Préstamos de Equipos', url: '/prestamos-equipos', icon: 'laptop' }
  ];

  public labels = ['Notas', 'Trabajos'];
  isAuthenticated: boolean = false;
  userEmail: string | null = ''; // Para almacenar el email del usuario

  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    // Verificar el estado del usuario
    this.authService.getUser().subscribe(user => {
      if (user) {
        console.log('Usuario autenticado:', user.email); // Verificar autenticación
        this.isAuthenticated = true;
        this.userEmail = user.email; // Obtén el email del usuario
      } else {
        console.log('No autenticado');
        this.isAuthenticated = false;
        this.userEmail = null;
      }
    });
  }

  // Navegar a la página de inicio de sesión
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  // Navegar a la página de registro
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  // Método para cerrar sesión
  logout() {
    this.authService.logout().then(() => {
      this.isAuthenticated = false;
      this.userEmail = null;
      this.router.navigate(['/home']); // Redirige a la página principal
    });
  }
}
