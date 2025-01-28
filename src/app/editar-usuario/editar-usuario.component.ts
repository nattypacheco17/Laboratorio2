import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent implements OnInit{
    public id!: number;
    public cedula!: string;
    public nombre!: string;
    public correo!: string;
    public direccion!: string;
    public telefono!: string;
    public usuario: any;

    constructor(
      private route: ActivatedRoute,
      public UsuarioService: UsuarioService,
      private router: Router
    ) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.id = +params.get('idusuario')!;
        this.ObtenerUsuarioPorId();
      });
    }

    async ObtenerUsuarioPorId(): Promise<void> {
      try {
        this.usuario = await this.UsuarioService.getUserById(this.id);
        this.nombre = this.usuario[0].nombreusuario;
        this.cedula = this.usuario[0].cedulausuario;
        this.telefono = this.usuario[0].telefonousuario;
        this.correo = this.usuario[0].correousuario;
        this.direccion = this.usuario[0].direccionusuario;
      } catch (error) {
        console.error(error);
      }
    }

    async actualizarUsuario(): Promise<void> {
      const usuarioActualizado = {
        nombreusuario: this.nombre,
        cedulausuario: this.cedula,
        telefonousuario: this.telefono,
        direccionusuario: this.direccion,
        correousuario: this.correo
      };

      try {
        const response = await this.UsuarioService.updateUser(this.id, usuarioActualizado);
        if (response.status === 'Usuario actualizado exitosamente') {
          console.log('Usuario actualizado exitosamente');
          this.router.navigate(['/listarUsuarios']);
        } else {
          console.error('Error al actualizar el usuario');
        }
      } catch (error) {
        console.error(error);
      }
    }

    
    async eliminarUsuario(): Promise<void> {
      try {
          await this.UsuarioService.deleteUserByCedula(this.cedula);
          console.log('Usuario eliminado correctamente');
          alert('Usuario eliminado correctamente');
          this.router.navigate(['/listarUsuarios']);
      } catch (error) {
          console.log(error);
      }
  }

  }
