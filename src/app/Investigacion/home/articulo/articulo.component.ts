import { Component, OnInit } from '@angular/core';
import { InvestigacionService } from '../../Servicios/investigacion.service';
import { Articulo } from '../../Models/articulos';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment'
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
  public Articulo:Articulo={
    _id:"",
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
  constructor(private service:InvestigacionService, private form:FormBuilder) { 
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
      _id:"",
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
  createArticle(){
    this.service.createArticle(this.Articulo).subscribe(data=>{
      console.log(data)
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
        console.log(i)
    }
  }
  noShow(){
    this.Years.splice(0,1)
    this.Articulo.personas.splice(0,1);
  }
}
