import { Component, OnInit } from '@angular/core';
import { Capacitacion } from '../../Models/capacitacion';
import { InvestigacionService } from '../../Servicios/investigacion.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrls: ['./capacitacion.component.css']
})
export class CapacitacionComponent implements OnInit {
  Capacitacion:Capacitacion={
    _id:null,
    persona:"",
    tipo:"",
    instructor:"",
    fecha_inicio:"",
    fecha_fin:"",
    name:""
  }
  public form_capacitacion:FormGroup;
  public allCapacitacion:any=[];  
  public save_update:any=[]
  public deleteCapa:any=[]
  public User:any=[]
  constructor(private servicio:InvestigacionService,private form:FormBuilder,private snackBar:MatSnackBar) { 
    this.form_capacitacion = this.form.group({
      _id:null,
      persona:"",
      tipo:"",
      instructor:"",
      fecha_inicio:"",
      fecha_fin:"",
      name:""
    });
  }

  ngOnInit() {
    this.allCapacitaciones();
    this.allUser();
  }
  allCapacitaciones(){
    this.servicio.allCapacitacion().subscribe(data=>{
      this.allCapacitacion = data
    })
  }
  saveOrUpdate(){
    if(this.Capacitacion._id == null){
      this.createCapacitacion();
    }else{
      this.updateCapacitacion();
    }
  }
  createCapacitacion(){
    this.servicio.createCapacitacion(this.Capacitacion).subscribe(data=>{
      this.save_update = data
      this.allCapacitaciones();
      this.noShow();
      this.openSnackBar('Guardado')
    })
  }
  updateCapacitacion(){
    this.servicio.updateCapacitacion(this.Capacitacion).subscribe(data=>{
      this.save_update = data
      this.allCapacitaciones();
      this.noShow();
      this.openSnackBar('Actualizado')
    })
  }
  allUser(){
    this.servicio.getUsers().subscribe(data=>{
      this.User = data
    })
  }
  deleteCapacitacion(){
    var del ={
      _id:this.Capacitacion._id
    }
    this.servicio.deleteCapacitacion(del).subscribe(data=>{
      this.deleteCapa = data
      this.allCapacitaciones();
      this.noShow();
      this.openSnackBar('Eliminado')
    })
  }
  detail_capacitacion(capacitacion){
    this.Capacitacion = Object.assign({},capacitacion);
    this.Capacitacion.fecha_fin = moment(capacitacion.fecha_fin).format('YYYY-MM-DD')
    this.Capacitacion.fecha_inicio = moment(capacitacion.fecha_inicio).format('YYYY-MM-DD')
  }
  noShow(){
    this.form_capacitacion.reset();
  }  
  openSnackBar(message) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
