import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = 'http://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png';
  // form = FormGroup;

  public usuario  = '';
  public password = '';

  loading = false;


  form = this.fb.group({
    usuario : ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private router: Router,private fb: FormBuilder, private _snackBar:MatSnackBar) {

   }

  ngOnInit(): void {
  }

  ingresar() {
    console.log(this.form);
    /*const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    console.log(usuario);
    console.log(password);*/
    console.log(this.usuario);
    console.log(this.password);

  

    if ((this.usuario === 'victor') && (this.password === 'valdes')) {
        this.valido();
       // this.router.navigateByUrl('/dashboard');
    }
      else {
        this.error();
        this.form.reset();
    }

  }

  error() {
    this._snackBar.open('Usuario o clave invalido', 'Splash', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
    this.loading = false;
  }

  valido() {
   /* this._snackBar.open('Usuario y clave valido', 'Splash', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });*/

    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('/dashboard');
    },1500);

  }

}
