import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule, HeaderComponent],
})
export class AppComponent {
  title = "portafolio"

  email: string = '';
  mensaje: string = '';
  isSending: boolean = false;
  enviarFormulario() {
    console.log('Mensaje de contacto enviado', this.email, this.mensaje);
    this.isSending = true;

    setTimeout(() => {
      this.isSending = false;
      alert('Mensaje de contacto enviado correctamente');
    }, 2000);
  }
}