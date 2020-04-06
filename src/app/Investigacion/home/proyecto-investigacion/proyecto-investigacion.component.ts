import { Component, OnInit } from '@angular/core';
import { ProjectInvestigation } from '../../Models/project_investigation';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InvestigacionService } from '../../Servicios/investigacion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyecto-investigacion',
  templateUrl: './proyecto-investigacion.component.html',
  styleUrls: ['./proyecto-investigacion.component.css']
})
export class ProyectoInvestigacionComponent implements OnInit {

  Project: ProjectInvestigation = {
    _id:null,
    personal_involucrado: [{}],
    grupo_investigacion: [{}],
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
    estado_proyecto: ""
  }
  form_project: FormGroup
  saveProject: any = []
  aProject:any = []
  constructor(private form: FormBuilder, private service: InvestigacionService, private snackBar: MatSnackBar,private routerActivated:ActivatedRoute) {
    this.form_project = this.form.group({
      personal_involucrado: [{}],
      grupo_investigacion: [{}],
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
      estado_proyecto: ""
    })
  }

  ngOnInit() {
    this.routerActivated.params.subscribe(params => {
      this.Project._id = params['id']
    });
    this.noShow()
    this.oneProject()
  }
  quitResultados(i) {
    this.Project.resultados_esperados.splice(i, 1)
  }
  async addResultado(event) {
    await this.Project.resultados_esperados.push(event.value);
  }
  noShow() {
    this.Project.resultados_esperados.shift()
  }
  createProject() {
    this.service.createProjectInvestigation(this.Project).subscribe(data =>{
      this.saveProject = data
      if(this.saveProject.mensaje = "Guardado") {
        this.openSnackBar("Guardado Correctamente");
      }      
    })
  }
  openSnackBar(message) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
  oneProject(){    
    this.service.OneProjectInvestigation(this.Project).subscribe(data=>{
      this.aProject = data
      console.log(data)
      this.Project = Object.assign({},this.aProject)
    })
  }

}
