import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestamos-equipos',
  templateUrl: './prestamos-equipos.page.html',
  styleUrls: ['./prestamos-equipos.page.scss'],
})
export class PrestamosEquiposPage implements OnInit {
  equipos: any[] = [];
  userId: string = '';

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener el usuario actual
    this.authService.getUser().subscribe((user) => {
      this.userId = user?.uid || '';
    });

    // Obtener los equipos desde Firestore
    this.firestore
      .collection('equipos')
      .valueChanges({ idField: 'id' })
      .subscribe((equipos: any[]) => {
        this.equipos = equipos;
      });
  }

  // Ver los detalles de un equipo
  verDetallesEquipo(id: string) {
    this.router.navigate([`/prestamos-detalle/${id}`]);
  }

  // Eliminar un equipo
  eliminarEquipo(id: string) {
    this.firestore.collection('equipos').doc(id).delete().then(() => {
      console.log('Equipo eliminado');
    });
  }

  // Verificar si el usuario es el propietario del equipo
  esPropietario(equipo: any): boolean {
    return equipo.usuarioId === this.userId;
  }
}
