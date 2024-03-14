import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {usuario: 'perez', nombre: 'Bellotero', apellido: 'Lolo', sexo: 'Hombre'},
    {usuario: 'perez1', nombre: 'Bellotero1', apellido: 'Lolo1', sexo: 'Hombre'},
    {usuario: 'perez2', nombre: 'Bellotero2', apellido: 'Lolo2', sexo: 'Hombre1'},
    {usuario: 'perez3', nombre: 'Bellotero3', apellido: 'Lolo3', sexo: 'Hombre2'},
    {usuario: 'perez4', nombre: 'Bellotero4', apellido: 'Lolo4', sexo: 'Hombre3'},
    {usuario: 'perez5', nombre: 'Bellotero5', apellido: 'Lolo5', sexo: 'Hombre4'},
  ];
  
  constructor() { 
  }

  getUsuarios() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(i:number){
    this.listUsuarios.splice(i,1);
    console.log(this.listUsuarios);
  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }
}
