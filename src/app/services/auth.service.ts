import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  // Registro de usuarios (devuelve una Promise)
  register(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password); // Aquí devolvemos la promesa
  }

  // Obtener el estado del usuario actual (Observable)
  getUser(): Observable<any> {
    return this.afAuth.authState; // Devuelve el estado del usuario autenticado
  }

  // Inicio de sesión
  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Cerrar sesión
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
