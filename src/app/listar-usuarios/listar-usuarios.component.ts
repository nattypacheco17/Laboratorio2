import { Component} from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css'
})
export class ListarUsuariosComponent {

  public usuarios:any;

  constructor(public UsuarioService : UsuarioService, private router: Router){}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.UsuarioService.getUsers().then(data =>{
      this.usuarios = data;
    });
  }


  redirectToEditarUsuario(idusuario:number):void{
    this.router.navigate(['/editarUsuario', {idusuario:idusuario}]);
  }

  navegarAInsertarUsuario() {
    this.router.navigate(['/insertarUsuario']);
  }
  navegarABuscarUsuario() {
    this.router.navigate(['/buscarUsuario']);
  }
/*
  actualizarUsuario(cedula: string) {
    let usuarioActualizado = prompt('Ingresa los nuevos datos del usuario en formato JSON:');
    if (usuarioActualizado) {
      try {
        const usuario = JSON.parse(usuarioActualizado);
        this.UsuarioService.updateUser(cedula, usuario).then(() => {
          alert('Usuario actualizado correctamente');
        }).catch(error => console.error(error));
      } catch (error) {
        alert('Formato JSON incorrecto.');
      }
    }
  }

  eliminarUsuario(cedula: string) {
    if (confirm('¿Estás seguro de que deseas eliminar a este usuario?')) {
      this.UsuarioService.deleteUserByCedula(cedula).then(() => {
        alert('Usuario eliminado correctamente');
        this.cargarUsuarios(); // Recargar la lista de usuarios
      }).catch(error => console.error(error));
    }
  }

  */
}
