import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Login } from '../../Models/Login';
import { InvestigacionService } from '../../Servicios/investigacion.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private Login: Login = {
    dni: '',
    password: ''
  }
  public login: any = [];
  form_login: FormGroup;
  constructor(private servicio: InvestigacionService, private router: Router, private snackBar: MatSnackBar, private form: FormBuilder) {
    this.form_login = this.form.group({
      dni: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }
  getLogin() {
    this.servicio.getLogin(this.Login).subscribe(res => {
      this.login = res
      if (this.login.length === 1) {

        window.location.reload()
        this.router.navigate(['home'])
        localStorage.setItem('sesion', JSON.stringify(res));
      }
      else {
        this.openSnackBar('Datos Incorrectos')
      }
    })
  }
  getData(): boolean {
    var token = JSON.parse(localStorage.getItem("sesion"));
    return token
  }

  openSnackBar(message) {
    this.snackBar.open(message, '', { duration: 2000 });
  }
}



