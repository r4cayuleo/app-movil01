import { Component, OnInit } from '@angular/core'; // Añade OnInit para cargar libros al inicio
import { AngularFireStorage } from '@angular/fire/compat/storage'; // Para Firebase Storage
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Para Firestore
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'; // Para acceder a la cámara
import { finalize } from 'rxjs/operators'; // Para esperar la subida completa de la imagen
import { Observable } from 'rxjs'; // Para manejar la lista de libros como observable

@Component({
  selector: 'app-intercambio-libros',
  templateUrl: './intercambio-libros.page.html',
  styleUrls: ['./intercambio-libros.page.scss'],
})
export class IntercambioLibrosPage implements OnInit {
  titulo: string = '';
  descripcion: string = '';
  imagenURL: string = ''; // Para la URL de la imagen
  successMessage: string = '';
  errorMessage: string = '';
  libros: Observable<any[]> = new Observable<any[]>(); // Para almacenar los libros desde Firestore

  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    // Obtener los libros desde Firestore al cargar la página
    this.libros = this.firestore.collection('libros').valueChanges();
  }

  // Función para subir imagen desde galería
  async subirImagenDesdeGaleria() {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos, // Esto abre la galería
        quality: 90
      });
  
      if (image && image.dataUrl) {
        this.imagenURL = image.dataUrl; // Muestra la imagen seleccionada
      } else {
        this.errorMessage = 'No se pudo seleccionar la imagen.';
      }
    } catch (error: any) {
      this.errorMessage = 'Error al seleccionar la imagen: ' + error.message;
    }
  }

  // Función para tomar una foto con la cámara
  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera, // Esto abre la cámara
        quality: 90
      });
  
      if (image && image.dataUrl) {
        this.imagenURL = image.dataUrl; // Muestra la imagen tomada
      } else {
        this.errorMessage = 'No se pudo tomar la foto.';
      }
    } catch (error: any) {
      this.errorMessage = 'Error al tomar la foto: ' + error.message;
    }
  }
  
  // Función para subir el libro a Firebase Storage y guardar los detalles en Firestore
  agregarLibro() {
    if (!this.titulo || !this.descripcion || !this.imagenURL) {
      this.errorMessage = 'Por favor completa todos los campos y sube una imagen.';
      return;
    }
  
    const filePath = `libros/${new Date().getTime()}_imagen.jpg`; // Ruta en Firebase Storage
    const fileRef = this.storage.ref(filePath);
    const task = fileRef.putString(this.imagenURL, 'data_url'); // Sube la imagen como Data URL
  
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          // Guardar los detalles del libro en Firestore
          this.firestore.collection('libros').add({
            titulo: this.titulo,
            descripcion: this.descripcion,
            imagenURL: url
          }).then(() => {
            this.successMessage = 'Libro agregado con éxito';
            this.limpiarFormulario();
          }).catch((error) => {
            this.errorMessage = 'Error al agregar el libro: ' + error.message;
          });
        });
      })
    ).subscribe();
  }

  // Limpiar el formulario después de guardar
  limpiarFormulario() {
    this.titulo = '';
    this.descripcion = '';
    this.imagenURL = '';
  }
}
