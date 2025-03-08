import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FlavouryStock';

  nombre: string = '';
  primerApellido: string = '';
  segundoApellido: string = '';
  empresa: string = '';
  email: string = '';
  contraseña: string = '';
  aceptarCondiciones: boolean = false;

  crearCuenta() {
    console.log('Cuenta creada:', {
      nombre: this.nombre,
      primerApellido: this.primerApellido,
      segundoApellido: this.segundoApellido,
      empresa: this.empresa,
      email: this.email,
      contraseña: this.contraseña, //esto tiene que ir encriptado
      aceptarCondiciones: this.aceptarCondiciones
    });
  }
}
