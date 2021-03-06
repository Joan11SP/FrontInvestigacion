import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  validar=[]
  constructor(private router:Router) { }

  ngOnInit() {
    var token = JSON.parse(localStorage.getItem("sesion"));
    this.validar = token
  }
  salir(){    
    window.location.reload()
    localStorage.removeItem('sesion')
    this.router.navigate(['home'])
  }
}
