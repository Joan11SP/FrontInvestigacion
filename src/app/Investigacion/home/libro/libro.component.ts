import { Component, OnInit } from '@angular/core';
import { InvestigacionService } from '../../Servicios/investigacion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Libro } from '../../Models/libro';
import * as moment from 'moment'
@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  User:any=[]
  public Libro:Libro={
    titulo:"",
    _id:null,
    fecha_publicacion:"",
    personas:[{}],
    editorial:"",
    tipo_libro:"",
    numero_paginas:null,
    area_publicacion:"",
    isbn:""
  }
  books:any=[]
  allBook:any=[]
  public validar = []
  public form_libro:FormGroup
  constructor(private servicio:InvestigacionService,private snackBar:MatSnackBar,private form:FormBuilder) { 
    this.form_libro = this.form.group({
      titulo:"",
    _id:null,
    fecha_publicacion:"",
    personas:[{}],
    editorial:"",
    tipo_libro:"",
    numero_paginas:null,
    area_publicacion:"",
    isbn:""
    })
  }

  ngOnInit() {
    var token = JSON.parse(localStorage.getItem('sesion'));
    this.validar = token 
    this.allUser();
    moment.locale('es')  
    this.noShow();
    this.allBooks();
  }
  allUser(){
    this.servicio.getUsers().subscribe(data=>{
      this.User = data
    })
  }
  addUser(user){
    this.Libro.personas.push(user)
  }
  quitPerson(i){
    this.Libro.personas.splice(i,1)
  }
  noShow(){
    this.Libro.personas.splice(0,20)
    this.form_libro.reset();
  }
  saveOrupdate(){
    if(this.Libro._id==null){
      this.createBook();
    }
    else{
      this.updateBook();
    }
  }
  createBook(){
    this.servicio.saveBook(this.Libro).subscribe(data=>{
      this.books = data
      if(this.books.mensaje == 1){
        this.openSnackBar('Guardado Correctamente')
        this.allBooks();
        this.noShow()
      }
    })
  }
  updateBook(){
    this.servicio.updateBook(this.Libro).subscribe(data=>{
      this.books = data
      if(this.books.mensaje == 1){
        this.openSnackBar('Actualizado Correctamente')
        this.allBooks();
        this.noShow()
      }
    })
  }
  allBooks(){
    this.servicio.allBooks().subscribe(data=>{
      this.allBook = data
      for (const data of this.allBook) {
        data.fecha_publicacion = moment.utc(data.fecha_publicacion).format('LL')
      }
    })
  }
  detail_book(book){
    this.Libro = Object.assign({},book);
    this.Libro.fecha_publicacion = moment(book.fecha_publicacion).format('YYYY-MM-DD');
  }
  openSnackBar(message) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
