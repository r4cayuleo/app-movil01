import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorias-nueva',
  templateUrl: './tutorias-nueva.page.html',
  styleUrls: ['./tutorias-nueva.page.scss'],
})
export class TutoriasNuevaPage {
  nombre: string = '';
  estudiantes: string = '';
  descripcion: string = '';
  horarios: string = '';
  contacto: string = ''; // Contacto adicional
  successMessage: string = '';

  constructor(private firestore: AngularFirestore, private router: Router) {}

  guardarTutoria() {
    if (!this.nombre || !this.estudiantes || !this.descripcion || !this.horarios || !this.contacto) {
      this.successMessage = 'Por favor completa todos los campos';
      return;
    }

    const nuevaTutoria = {
      nombre: this.nombre,
      estudiantes: this.estudiantes,
      descripcion: this.descripcion,
      horarios: this.horarios,
      contacto: this.contacto, // Guardar el contacto
    };

    this.firestore.collection('tutorias').add(nuevaTutoria).then(() => {
      this.successMessage = '¡Tutoría agregada con éxito!';
      setTimeout(() => {
        this.router.navigate(['/tutorias']);
      }, 2000);
    }).catch(error => {
      console.error('Error al guardar la tutoría:', error);
      this.successMessage = 'Error al agregar la tutoría. Inténtalo nuevamente.';
    });
  }
}
