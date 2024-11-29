import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-prestamos-detalle',
  templateUrl: './prestamos-detalle.page.html',
  styleUrls: ['./prestamos-detalle.page.scss'],
})
export class PrestamosDetallePage implements OnInit {
  equipo: any = null; // Almacena los detalles del equipo

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtener ID desde la URL

    if (!id) {
      console.error('El ID del equipo no se encuentra en la URL.');
      return;
    }

    // Obtener los detalles del equipo desde Firebase
    this.firestore
      .collection('equipos')
      .doc(id)
      .valueChanges()
      .subscribe(
        (equipo: any) => {
          this.equipo = equipo;
        },
        (error) => {
          console.error('Error al cargar los detalles del equipo:', error);
        }
      );
  }
}
