import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-detalle-tutoria',
  templateUrl: './detalle-tutoria.page.html',
  styleUrls: ['./detalle-tutoria.page.scss'],
})
export class DetalleTutoriaPage implements OnInit {
  tutoria: any = null;
  comentarios: any[] = [];
  nuevoComentario: string = '';
  userEmail: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string;

    this.authService.getUser().subscribe(user => {
      this.userEmail = user ? user.email : null;
    });

    this.firestore.collection('tutorias').doc(id).valueChanges().subscribe(tutoria => {
      this.tutoria = tutoria;
    });

    this.firestore.collection(`tutorias/${id}/comentarios`, ref => ref.orderBy('fecha', 'desc'))
      .valueChanges()
      .subscribe(comentarios => {
        this.comentarios = comentarios;
      });
  }

  agregarComentario() {
    if (!this.nuevoComentario.trim()) return;

    const id = this.route.snapshot.paramMap.get('id') as string;
    const comentario = {
      usuario: this.userEmail || 'Usuario Anónimo',
      texto: this.nuevoComentario.trim(),
      fecha: new Date(),
    };

    this.firestore.collection(`tutorias/${id}/comentarios`).add(comentario).then(() => {
      this.nuevoComentario = '';
    });
  }
}
