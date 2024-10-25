import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = ''; // Para mensajes de error
  successMessage: string = ''; // Para mensajes de éxito

  constructor(private authService: AuthService, private router: Router) {}

  // Función onLogin para manejar el inicio de sesión
  onLogin() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.successMessage = 'Inicio de sesión exitoso. Redirigiendo...';
        
        // Redirigir al home después de 2 segundos
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000); // Espera 2 segundos antes de redirigir

      })
      .catch(error => {
        this.errorMessage = 'Error al iniciar sesión: ' + error.message;
      });
  }
}
