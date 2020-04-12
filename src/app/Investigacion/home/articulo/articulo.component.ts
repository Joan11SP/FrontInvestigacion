import { Component, OnInit } from '@angular/core';
import { InvestigacionService } from '../../Servicios/investigacion.service';
import { Articulo } from '../../Models/articulos';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment'
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  Countries:any=[]
  public Indice;
  public Documento;
  public Project:any=[]
  public User:any=[]
  public Articulos:any=[]
  public Years=[{}];
  public save_update:any=[]
  public Articulo:Articulo={
    _id:null,
    name:"",
    id_project:"",
    personas:[{}],
    fecha_aceptacion:"",
    fecha_publicacion:"",
    tipo_document:"",
    indice:"",
    anio:null,
    idioma:"",
    pais:"",   
    doi:"",
    issn:"",
    sjr:"",
    isbn:"",
    link:"",
    revista:"",
    quartile:"",     
  }
  public form_articulo:FormGroup;
  constructor(private service:InvestigacionService, private form:FormBuilder,private snackBar:MatSnackBar) { 
    this.Documento=[
      {id:"A",documento:"Artículo"},
      {id:"P",documento:"Poster"}
    ];
    this.Indice=[
      {id:"M",name:"Memorias"},
      {id:"L",name:"LatIndex"},
      {id:"S",name:"Scopus"}
    ];
    this.form_articulo = this.form.group({
      _id:null,
      name:"",
      id_project:"",
      personas:[],
      fecha_aceptacion:"",
      fecha_publicacion:"",
      tipo_document:"",
      indice:"",
      anio:null,
      idioma:"",
      pais:"",   
      doi:"",
      issn:"",
      sjr:"",
      isbn:"",
      link:"",
      revista:"",
      quartile:"",     
    })
  }

  ngOnInit() {
    this.noShow();
    this.allProjects();
    this.allUsers();
    this.allArticles();
    this.anio();
  }
  allProjects(){
    this.service.allProjectInvestigation().subscribe(data=>{
      this.Project = data
    })
  }
  allUsers(){
    this.service.getUsers().subscribe(data=>{
      this.User = data
    })
  }
  allArticles(){
    this.service.allArticles().subscribe(data=>{
      this.Articulos = data
    })
  }
  saveOrupdate(){
    if(this.Articulo._id==null){
      this.createArticle();
    }else{
      this.updateArticle();
    }
  }
  createArticle(){
    this.service.createArticle(this.Articulo).subscribe(data=>{
      this.save_update = data
      if(this.save_update.mensaje == 1){
        this.openSnackBar('Guardado correctamente');
        this.allArticles();
        this.noShow();
      }
    })
  }
  updateArticle(){
    this.service.updateArticles(this.Articulo).subscribe(data=>{
      this.save_update = data
      if(this.save_update.nModified == 1){
        this.openSnackBar('Actualizado correctamente');
        this.allArticles();
        this.noShow();
      }
    })
  }
  deleteArticle(){
    this.service.deleteArticle(this.Articulo).subscribe(data=>{
      this.save_update=data
      if(this.save_update.mensaje == 1){
        this.openSnackBar('Eliminado');
        this.allArticles();
        this.noShow();
      }
    })
  }
  changePerson(user){
    this.Articulo.personas.push(user)
  }
  quitPerson(i){
    this.Articulo.personas.splice(i,1);
  }
  detail_article(article){
    this.Articulo = Object.assign({},article);
    this.Articulo.fecha_aceptacion = moment(article.fecha_aceptacion).format('YYYY-MM-DD')
    this.Articulo.fecha_publicacion = moment(article.fecha_publicacion).format('YYYY-MM-DD')
  }
  anio(){
    const year = moment().year();
    for(var i = 1995;i<=year;i++){
        this.Years.push(i);
    }
  }
  noShow(){
    this.Years.splice(0,1)
    this.Articulo.personas.splice(0,1);
    this.form_articulo.reset();
    this.Articulo.anio=null
  }
  openSnackBar(message) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
