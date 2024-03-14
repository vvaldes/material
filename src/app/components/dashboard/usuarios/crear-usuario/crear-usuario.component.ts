import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from '../../../../interfaces/usuario';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  form : FormGroup;

  public tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  sexo: any[] = [
    {value: 'Masculino', viewValue: 'Masculino'},
    {value: 'femenino', viewValue: 'femenino'},
    {value: 'neutro', viewValue: 'neutro'},
  ];

  sexo1: any[] = ['Masculino', 'femenino'];
  constructor(private fb: FormBuilder, 
    private _usuarioService: UsuarioService,
    private router: Router,
    private _snakBar: MatSnackBar) { 

    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  agregarUsuario() {
    console.log(this.form);

    const usuario : Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo
    }
    console.log(usuario);

    this._usuarioService.agregarUsuario(usuario);
    this.router.navigate(['dashboard/usuarios']);

    this._snakBar.open('El usuario fue añadido con éxito', '', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
