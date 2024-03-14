import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../../interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

 /* listUsuarios: Usuario[] = [
    {usuario: 'perez', nombre: 'Bellotero', apellido: 'Lolo', sexo: 'Hombre'},
    {usuario: 'perez1', nombre: 'Bellotero1', apellido: 'Lolo1', sexo: 'Hombre'},
    {usuario: 'perez2', nombre: 'Bellotero2', apellido: 'Lolo2', sexo: 'Hombre1'},
    {usuario: 'perez3', nombre: 'Bellotero3', apellido: 'Lolo3', sexo: 'Hombre2'},
    {usuario: 'perez4', nombre: 'Bellotero4', apellido: 'Lolo4', sexo: 'Hombre3'},
    {usuario: 'perez5', nombre: 'Bellotero5', apellido: 'Lolo5', sexo: 'Hombre4'},
  ];*/
  listUsuarios: Usuario[] =  [];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  dataSource = new MatTableDataSource(this.listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private _usuarioService: UsuarioService, private _snakBar: MatSnackBar) {
   }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.listUsuarios = this._usuarioService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  borrar(i:number) {
    this._usuarioService.eliminarUsuario(i);
    this.cargarUsuarios();

    if (!this.listUsuarios.length) {
      this._snakBar.open('No existen más usuarios', '', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    } else {
      this._snakBar.open('Fue eliminado con éxito', '', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }

}
