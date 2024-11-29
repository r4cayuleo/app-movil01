import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-prestamos-nuevo',
  templateUrl: './prestamos-nuevo.page.html',
  styleUrls: ['./prestamos-nuevo.page.scss'],
})
export class PrestamosNuevoPage {
  nombre: string = '';
  tipo: string = '';
  marca: string = '';
  memoria: string = '';
  ram: string = '';
  contacto: string = '';
  estado: string = 'Disponible';
  errorMessage: string = ''; // Mensaje de error para validaciones

  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private authService: AuthService
  ) {}

  guardarEquipo() {
    // Validar que todos los campos estén completos
    if (!this.nombre || !this.tipo || !this.marca || !this.memoria || !this.ram || !this.contacto) {
      this.errorMessage = 'Por favor, completa todos los campos antes de guardar.';
      return;
    }

    this.authService.getUser().subscribe((user) => {
      if (user) {
        const nuevoEquipo = {
          nombre: this.nombre,
          tipo: this.tipo,
          marca: this.marca,
          memoria: this.memoria,
          ram: this.ram,
          contacto: this.contacto,
          estado: this.estado,
          usuarioId: user.uid, // Relacionar con el usuario actual
        };

        this.firestore
          .collection('equipos')
          .add(nuevoEquipo)
          .then(() => {
            this.errorMessage = ''; // Limpiar mensaje de error
            this.router.navigate(['/prestamos-equipos']);
          })
          .catch((error) => {
            console.error('Error al guardar el equipo:', error);
            this.errorMessage = 'Hubo un error al guardar el equipo. Intenta nuevamente.';
          });
      }
    });
  }
}
