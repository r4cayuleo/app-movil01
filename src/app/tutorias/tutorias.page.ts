import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorias',
  templateUrl: './tutorias.page.html',
  styleUrls: ['./tutorias.page.scss'],
})
export class TutoriasPage implements OnInit {
  tutorias$!: Observable<any[]>;

  constructor(private firestore: AngularFirestore, private router: Router) {}

  ngOnInit() {
    this.tutorias$ = this.firestore.collection('tutorias').valueChanges({ idField: 'id' });
  }

  abrirTutoria(id: string) {
    this.router.navigate([`/detalle-tutoria/${id}`]);
  }

  navegarAgregarTutoria() {
    this.router.navigate(['/tutorias-nueva']);
  }
}
