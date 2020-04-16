import { Component, OnInit } from '@angular/core';
import { Seguimiento } from '../../Models/seguimineto';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InvestigacionService } from '../../Servicios/investigacion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment'

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {
  Seguimiento: Seguimiento = {
    _id: null,
    id_project: "",
    result_reach: [{}],
    observacion: [],
    novedades: [],
    month: "",
    qualification: null,
    percentage: [{}]
  }
  form_seguimiento: FormGroup
  Project: any = []
  resultados: any = []
  Seguidos: any = []
  bandera: boolean
  Create
  seguimiento=[]
  constructor(private service: InvestigacionService, private snackBar: MatSnackBar, private form: FormBuilder) {
    this.form_seguimiento = this.form.group({
      _id: null,
      id_project: "",
      result_reach: [],
      observacion: [],
      novedades: [],
      month: "",
      qualification: null,
      percentage: null
    });
    this.seguimiento=[
      { porcentaje: 10 },
      { porcentaje: 20 },
      { porcentaje: 30 },
      { porcentaje: 40 },
      { porcentaje: 50 },
      { porcentaje: 60 },
      { porcentaje: 70 },
      { porcentaje: 80 },
      { porcentaje: 90 },
      { porcentaje: 100 },
    ]
  }

  ngOnInit() {
    this.Seguimiento.result_reach.splice(0, 50);
    this.Seguimiento.percentage.splice(0,1);
    this.getProjects()
    this.allSeguimientos();
  }

  getProjects() {
    this.service.allProjectInvestigation().subscribe(data => {
      this.Project = data
    })
  }
  async changeProject(event) {
    this.Seguimiento.result_reach.splice(0, 50);
    this.bandera = true
    var id = {
      _id: event.target.value
    }
    await this.service.OneProjectInvestigation(id).subscribe(data => {
      this.resultados = data
      for (let a of this.resultados) {
        for (const a2 of a.resultados_esperados) {
           this.Seguimiento.result_reach.push(a2)
        }
      }
    })
  }
  obtenerPorcentaje(i,posicion){    
    const porc = i.target.value   
      if(this.Seguimiento.percentage[posicion]!=porc){    
        this.Seguimiento.percentage[posicion]=porc;
      }  
  }
  createSeguimiento() {
    this.service.newSeguimiento(this.Seguimiento).subscribe(data => {
      this.Create = data
        this.openSnackBar('Se guardo Correctamente')
        this.allSeguimientos()
        this.limpiar()
      
    })
  }
  allSeguimientos() {
    this.service.allSeguimiento().subscribe(data => {
      this.Seguidos = data         
    })
  }  
  deleteSeguimientos(){
    this.service.deleteSeguimiento(this.Seguimiento).subscribe(data=>{
      this.Create=data
      if(this.Create.mensaje=="eliminado"){
       this.limpiar();
      this.allSeguimientos();
      this.openSnackBar('Eliminado')
      }
      
    })
  }
  datos_seguimiento(seguir) {
    this.bandera = false
    this.Seguimiento = Object.assign({}, seguir)
    this.Seguimiento.month = moment(seguir.month).format('YYYY-MM');
    console.log(this.Seguimiento.percentage)
  }
  limpiar() {
    this.Seguimiento.result_reach.splice(0, 50);
    this.Seguimiento.id_project = null
    this.resultados = null
    this.form_seguimiento.reset();
    this.Seguimiento.percentage = undefined
  }
  openSnackBar(message){    
    this.snackBar.open(message,'',{
      duration:2000
    });
  }
  
}
