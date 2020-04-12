import { Component, OnInit } from '@angular/core';
import { ProjectInvestigation } from '../../Models/project_investigation';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InvestigacionService } from '../../Servicios/investigacion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-proyecto-investigacion',
  templateUrl: './proyecto-investigacion.component.html',
  styleUrls: ['./proyecto-investigacion.component.css']
})
export class ProyectoInvestigacionComponent implements OnInit {

  Project: ProjectInvestigation = {
    _id:null,
    name:"",
    personal_involucrado: [{}],
    fecha_inicio: "",
    fecha_fin: "",
    linea_investigacion: "",
    introduccion: "",
    justificacion: "",
    objetivos: "",
    materiales: "",
    resultados_esperados: [{}],
    presupuesto: "",
    cronograma: "",
    articulos_generados: [{}],
    estado_proyecto: "",
    id_group:""
  }
  form_project: FormGroup
  saveProject: any = []
  aProject:any = []
  Users:any=[]
  Groups:any=[]
  articulos:any=[]
  constructor(private form: FormBuilder, private service: InvestigacionService, private snackBar: MatSnackBar,private routerActivated:ActivatedRoute) {
    this.form_project = this.form.group({
      _id:null,
      name:"",
      personal_involucrado: [],
      fecha_inicio: "",
      fecha_fin: "",
      linea_investigacion: "",
      introduccion: "",
      justificacion: "",
      objetivos: "",
      materiales: "",
      resultados_esperados: [],
      presupuesto: "",
      cronograma: "",
      articulos_generados: [],
      estado_proyecto: "",
      id_group:""
    })
  }

  ngOnInit() {
    /*this.routerActivated.params.subscribe(params => {
      this.Project._id = params['id']
    });*/
    this.noShow()
    this.allProyect()
    this.getUsers()
    this.allGroups()
  }
  quitResultados(i) {
    this.Project.resultados_esperados.splice(i, 1);
  }
  async addResultado(event) {
    await this.Project.resultados_esperados.push(event.value);
    
  }
  involucrados(user){
    this.Project.personal_involucrado.push(user)
  }
  quitInvo(i){
    this.Project.personal_involucrado.splice(i,1)
  }
  noShow() {
    this.Project.resultados_esperados.splice(0,50);
    this.Project.articulos_generados.splice(0,50);
    this.Project.personal_involucrado.splice(0,50);
  }
  saveOrupdate(){
    if(this.Project._id == null){
      this.createProject()
    }else{
      this.updateProject()
    }
  }
  createProject() {
    this.service.createProjectInvestigation(this.Project).subscribe(data =>{
      this.saveProject = data
      if(this.saveProject.mensaje = "Guardado") {
        this.openSnackBar("Guardado Correctamente");
        this.allProyect();
        this.form_project.reset();
        this.noShow()
      }      
    })
  }
  openSnackBar(message) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
  allProyect(){
    this.service.allProjectInvestigation().subscribe(data=>{
      this.aProject=data      
    })
  }
  detailProyect(project:ProjectInvestigation){
    this.Project = Object.assign({},project);
    this.Project.fecha_fin = moment(this.Project.fecha_fin).format('YYYY-MM-DD')
    this.Project.fecha_inicio = moment(this.Project.fecha_inicio).format('YYYY-MM-DD')
    if(this.Project.estado_proyecto == "Ejecutandose"){
      this.Project.estado_proyecto = "E"
    }
    else if(this.Project.estado_proyecto == "Finalizado"){
      this.Project.estado_proyecto = "F"
    }
    this.service.OneProjectInvestigation(project).subscribe(data=>{
      this.articulos=data
    })
  }
  updateProject(){
    this.service.updateProjectInvestigation(this.Project).subscribe(data=>{
      this.saveProject = data
      console.log(data)
      if(this.saveProject.nModified==1){
        this.openSnackBar("Modificado Correctamente");
        this.allProyect();
        this.form_project.reset();
        this.noShow()
      }
      
    })
  }
  deleteProject(){
    this.service.deleteProjectInvestigation(this.Project).subscribe(data=>{
      this.saveProject = data
      this.allProyect();
        this.form_project.reset();
        this.noShow()
    })
  }
  getUsers(){
    this.service.getUsers().subscribe(data=>{
      this.Users = data
    })
  }
  allGroups(){
    this.service.allGroupInvestigation().subscribe(data=>{
      this.Groups = data
    })
  }
}
