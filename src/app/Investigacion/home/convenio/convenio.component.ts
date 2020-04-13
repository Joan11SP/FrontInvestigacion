import { Component, OnInit } from '@angular/core';
import { Convenio } from '../../Models/convenio';
import { InvestigacionService } from '../../Servicios/investigacion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from "moment"
@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.css']
})
export class ConvenioComponent implements OnInit {
  Convenio:Convenio={
    _id:null,
    nro:"",
    fecha_firma:"",
    obligaciones:"",
    beneficios:"",
    institucion:""
  }
  public form_convenio:FormGroup;
  Convenios:any=[]
  save_update:any=[];
  deleteCon:any=[];
  constructor(private servicio:InvestigacionService,private snackBar:MatSnackBar,private form:FormBuilder) {
    this.form_convenio = this.form.group({
      _id:null,
      nro:"",
      fecha_firma:"",
      obligaciones:"",
      beneficios:"",
      institucion:""
    });
   }
  
  ngOnInit() {
    this.allConvenios();
  }
  saveOrupdate(){
    if(this.Convenio._id == null){
      this.createConvenio();
    }
    else{
      this.updateConvenio();
    }
  }
  createConvenio(){
    this.servicio.createConvenio(this.Convenio).subscribe(data=>{
      this.save_update = data
      this.allConvenios();
      this.noShow();      
      this.openSnackBar('Guardado')
    })
  }
  updateConvenio(){
    this.servicio.updateConvenio(this.Convenio).subscribe(data=>{
      this.save_update = data
      this.allConvenios();
      this.noShow();      
      this.openSnackBar('Actualizado')
    })
  }
  deleteConvenios(){
    var del ={
      _id:this.Convenio._id
    }
    this.servicio.deleteConvenio(del).subscribe(data=>{
      this.deleteCon = data
      this.openSnackBar('Eliminado')
      this.allConvenios();
    })
  }
  allConvenios(){
    this.servicio.allConvenio().subscribe(data=>{
      this.Convenios = data;
      //this.Convenio.fecha_firma = moment(this.Convenio.fecha_firma).format('YYYY-MM-DD');
      
    })
  }
  detail_convenio(convenio){
    this.Convenio = Object.assign({},convenio);
    this.Convenio.fecha_firma = moment(convenio.fecha_firma).format('YYYY-MM-DD');
  }
  noShow(){
    this.form_convenio.reset();
  }
  openSnackBar(message) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
