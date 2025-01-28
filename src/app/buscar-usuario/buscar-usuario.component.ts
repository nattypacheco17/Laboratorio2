import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-buscar-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscar-usuario.component.html',
  styleUrl: './buscar-usuario.component.css'
})
export class BuscarUsuarioComponent {
  public cedula!: string;
  public nombre!: string;
  public correo!: string;
  public direccion!: string;
  public telefono!: string;
  public usuario: any;

  constructor(public UsuarioService: UsuarioService, private router: Router) {}
  async getUsuarioByCedula() {
    try{
      this.usuario = await this.UsuarioService.getUserByCedula(this.cedula);
      this.nombre = this.usuario[0].nombreusuario;
      this.telefono = this.usuario[0].telefonousuario;
      this.correo = this.usuario[0].correousuario;
      this.direccion = this.usuario[0].direccionusuario;
    }catch(error){
      console.log(error);
    }
  }

  navegarAListarUsuarios() {
    this.router.navigate(['/listarUsuarios']);
  }



}
