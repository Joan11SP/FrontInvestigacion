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
    name:null,
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
    archivo:null   
  }
  public form_articulo:FormGroup;
  idioma:any=[]
  pais:any=[]
  file :File
  photoSelected
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
      archivo:""   
    })
    this.idioma= [
      {
          "idioma": "Afrikáans",
          "code": "af"
      },
      {
          "idioma": "Árabe",
          "code": "ar"
      },
      {
          "idioma": "Bengalí",
          "code": "bn"
      },
      {
          "idioma": "Búlgaro",
          "code": "bg"
      },
      {
          "idioma": "Catalán",
          "code": "ca"
      },
      {
          "idioma": "Danés",
          "code": "da"
      },
      {
          "idioma": "Neerlandés",
          "code": "nl"
      },
      {
          "idioma": "Francés",
          "code": "fr"
      },
      {
          "idioma": "Alemán",
          "code": "de"
      },
      {
          "idioma": "Griego",
          "code": "el"
      },
      {
          "idioma": "Italiano",
          "code": "it"
      },
      {
          "idioma": "Portugués",
          "code": "pt-br"
      },
      {
          "idioma": "Rumano",
          "code": "ro"
      },
      {
          "idioma": "Ruso",
          "code": "ru"
      },
      {
          "idioma": "Serbio",
          "code": "sr-Latn"
      },
      {
          "idioma": "Eslovaco",
          "code": "sk"
      },
      {
          "idioma": "Esloveno",
          "code": "sl"
      },
      {
          "idioma": "Español",
          "code": "es"
      },
      {
          "idioma": "Galés",
          "code": "cy"
      },
      {
          "idioma": "Inglés",
          "code": "en"
      }
  ],
  this.pais= [
      {
          "code": "BR",
          "pais": "Brazil"
      },
      {
          "code": "VE",
          "pais": "Venezuela"
      },
      {
          "code": "PR",
          "pais": "Puerto Rico"
      },
      {
          "code": "PT",
          "pais": "Portugal"
      },
      {
          "code": "PY",
          "pais": "Paraguay"
      },
      {
          "code": "PA",
          "pais": "Panama"
      },
      {
          "code": "PE",
          "pais": "Peru"
      },
      {
          "code": "EC",
          "pais": "Ecuador"
      },
      {
          "code": "IT",
          "pais": "Italy"
      },
      {
          "code": "ES",
          "pais": "Spain"
      },
      {
          "code": "MX",
          "pais": "Mexico"
      },
      {
          "code": "CL",
          "pais": "Chile"
      },
      {
          "code": "CU",
          "pais": "Cuba"
      },
      {
          "code": "UY",
          "pais": "Uruguay"
      },
      {
          "code": "AR",
          "pais": "Argentina"
      },
      {
          "code": "CL",
          "pais": "Colombia"
      }
  ]
  }

  ngOnInit() {
    this.Years.splice(0,1)
    this.allArticles();
    this.noShow();
    this.allProjects();
    this.allUsers();
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
      console.log(data)
    })
  }
  saveOrupdate(){
    if(this.Articulo._id==null){
      this.saveArticleOarchivo()
    }else{
      this.updateArticle();
    }
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
    
    this.Articulo.personas.splice(0,1);
    this.form_articulo.reset();
    this.Articulo.anio=null
    this.Articulo.pais=null
    this.Articulo.idioma=null
  }
  openSnackBar(message) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
  photoSelect(event){
    const archivo = event.target.files
    if(event.target.files && event.target.files[0]){
      this.file = <File>archivo[0]
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result
      reader.readAsDataURL(this.file)
      
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
  newArchivo(){
    this.service.newArchivo(this.file).subscribe(data=>{
      console.log(data);
      this.file = null
    })
  }
  saveArticleOarchivo(){
    if(this.Articulo.name != null && this.file != undefined){
      this.newArchivo();
      this.createArticle();
    }
    else if(this.Articulo.name != null && this.file == undefined){
      this.createArticle();
    }
  }
}
