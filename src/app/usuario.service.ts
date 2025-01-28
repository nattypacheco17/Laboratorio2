import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000/';
  constructor(public http: HttpClient, public https: HttpClient) { }

  getUserByCedula(cedula: string) {
    console.log('Iniciando la búsqueda del usuario con cédula:', cedula);
    return new Promise((resolve) => {
      this.http.get(this.url + 'buscarUsuarioCedula/' + cedula)
        .subscribe({
          next: (data) => {
            console.log('Datos recibidos:', data);
            resolve(data);
          },
          error: (error) => {
            console.log('Error al buscar el usuario:', error);
          }
        });
    });
  }

  saveUser(data: any) {
    return new Promise((resolve) => {
      this.http.post(this.url + 'insertarUsuario/', data).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.url + 'buscarUsuarios/').subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }

  // Consultar usuario por ID
  getUserById(id: number): Promise<any> {
    return new Promise((resolve) => {
      this.http.get(this.url + 'usuario/getById/' + id).subscribe({
        next: (data: Object): void => {
          resolve(data);
        },
        error: (err): void => {
          console.log(err);
        }
      });
    });
  }

  //Actualizar por id
  updateUser(id: number, usuario: any): Promise<any> {
    return new Promise(resolve => {
      this.http.put(this.url + 'usuario/update/' + id, usuario).subscribe({
        next: (data: Object): void => {
          resolve(data);
        },
        error(err): void {
          console.log(err);
        }
      });
    });
  }
  // Elinar un usuario
  deleteUserByCedula(cedula: string): Promise<any> {
    return new Promise((resolve) => {
      this.http.delete(this.url + 'usuario/delete/' + cedula).subscribe({
        next: (data: Object): void => {
          resolve(data);
        },
        error: (err): void => {
          console.log(err);
        }
      });
    });
  }
  //Eliminar por id
  deleteUser(id: number): Promise<any> {
    return new Promise((resolve) => {
      this.http.delete(this.url + 'usuario/delete/' + id).subscribe({
        next: (data: Object): void => {
          resolve(data);
        },
        error: (err): void => {
          console.log(err);
        }
      });
    });
  }


}
