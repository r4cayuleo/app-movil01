import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Para Firestore
import { Router } from '@angular/router'; // Para redirigir después del registro

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nombre: string = '';
  apellido: string = '';
  usuario: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = ''; // Para mensajes de error
  successMessage: string = ''; // Para mensajes de éxito

  constructor(
    private authService: AuthService,
    private firestore: AngularFirestore, // Inyecta Firestore
    private router: Router // Inyecta el router para redirección
  ) {}

  // Función onRegister para manejar el registro y guardar datos adicionales
  onRegister() {
    console.log('Registro iniciado'); // Depuración
    this.authService.register(this.email, this.password)
      .then(userCredential => {
        console.log('Usuario registrado en Firebase Authentication'); // Depuración
        const userId = userCredential.user?.uid;

        // Guarda la información adicional en Firestore
        this.firestore.collection('users').doc(userId).set({
          nombre: this.nombre,
          apellido: this.apellido,
          usuario: this.usuario,
          email: this.email
        }).then(() => {
          console.log('Información adicional guardada en Firestore'); // Depuración
          this.successMessage = 'Registro exitoso. Serás redirigido al login en unos segundos.';
          
          // Redirigir al login después de 3 segundos
          setTimeout(() => {
            console.log('Redirigiendo al login...'); // Depuración
            this.router.navigate(['/login']); // Redirige al login
          }, 3000); // Espera 3 segundos antes de redirigir

        }).catch(error => {
          this.errorMessage = 'Error al guardar información adicional: ' + error.message;
          console.log(this.errorMessage); // Depuración
        });
      })
      .catch(error => {
        this.errorMessage = 'Error al registrarse: ' + error.message;
        console.log(this.errorMessage); // Depuración
      });
  }
}
