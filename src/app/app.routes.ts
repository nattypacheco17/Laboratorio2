import { Routes } from '@angular/router';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { InsertarUsuarioComponent } from './insertar-usuario/insertar-usuario.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';


export const routes: Routes = [
  {path: "buscarUsuario", component: BuscarUsuarioComponent, pathMatch: 'full'},
  {path:"insertarUsuario", component: InsertarUsuarioComponent, pathMatch: 'full'},
  {path: "listarUsuarios", component: ListarUsuariosComponent, pathMatch: 'full'},
  {path: "editarUsuario", component: EditarUsuarioComponent, pathMatch: 'full'},
];
