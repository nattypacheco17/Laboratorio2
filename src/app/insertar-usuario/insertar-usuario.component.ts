import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-insertar-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insertar-usuario.component.html',
  styleUrl: './insertar-usuario.component.css'
})
export class InsertarUsuarioComponent {
  public cedula!: string;
  public nombre!: string;
  public correo!: string;
  public direccion!: string;
  public telefono!: string;

  constructor(public UsuarioService: UsuarioService, private router: Router){}// Añadir Router al constructor

// Método para limpiar los campos
limpiarCampos(){
  this.nombre = '';
  this.cedula = '';
  this.telefono = '';
  this.direccion = '';
  this.correo = '';
}

  async saveNewUsuario(){
    try{
      let newUsuario = this.buildAndGetNewUsuarioObject();
      await this.UsuarioService.saveUser(newUsuario);
      console.log("Usuario guardado exitosamente.");
      alert('Usuario guardado correctamente'); // Mostrar alerta
      this.limpiarCampos(); // Limpiar campos después de guardar
    }catch(error){
      console.log("Ocurrio un error.");
    }
  }

  buildAndGetNewUsuarioObject(){
    let newUsuario = {
      nombreusuario: this.nombre,
      cedulausuario: this.cedula,
      telefonousuario: this.telefono,
      direccionusuario: this.direccion,
      correousuario: this.correo,
    }
    return newUsuario;
  }


  navegarAListarUsuarios() {
    this.router.navigate(['/listarUsuarios']);
  }
}
